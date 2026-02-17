---
id: 10
title: Facial Keypoints
subtitle: Detecting Facial Keypoints using Deep Learning
tags: ["Machine Learning", "Computer Vision"]
date: "2024-02-04T12:00:00"
services: ["Deep Learning", "Computer Vision", "PyTorch"]
polished: true
---
# Building a Facial Keypoint Detector with Deep Learning

Facial keypoint detection is a classic computer vision problem with applications ranging from face filters and animation to biometric security and medical diagnosis. In this project, I developed a Convolutional Neural Network (CNN) to automatically identify 15 key points on human faces, such as the centers of the eyes, the tip of the nose, and the corners of the mouth.

## The Data

The dataset consists of thousands of grayscale images, each sized at 96x96 pixels. Each image is paired with 15 keypoints, represented as $(x, y)$ coordinates. A unique challenge with this dataset is that many keypoints are missing (encoded as `NaN`), meaning our model and loss function must be robust enough to handle incomplete labels.

Before training, it's essential to visualize the data to understand the mapping between images and their corresponding keypoints.

```python
import matplotlib.pyplot as plt

def plot_keypoints(image, keypoints):
    plt.imshow(image.reshape(96, 96), cmap="gray")
    # Plot x, y pairs
    for i in range(0, len(keypoints), 2):
        plt.plot(keypoints[i], keypoints[i+1], "ro")
    plt.show()

# Visualizing a sample from the dataset
plot_keypoints(images[0], keypoints[0])
```

![Facial Keypoints Data Visualization](/assets/projects/data_viz.png)

## Preprocessing and Scaling

To ensure stable training, I normalized both the pixel values and the keypoint coordinates using `MinMaxScaler`. This maps all inputs to a range between 0 and 1. For the keypoints, I had to be careful to ignore the `NaN` values during the scaling process to maintain the spatial relationships.

## Designing the Architecture

For this task, I implemented a "VGG-style" architecture. This design uses repeated blocks of small $3 	imes 3$ convolutional filters followed by max-pooling layers to downsample the spatial dimensions while increasing the depth of the feature maps.

```python
import torch.nn as nn

class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.features = nn.Sequential(
            nn.Conv2d(1, 64, kernel_size=3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),

            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),

            nn.Conv2d(128, 256, kernel_size=3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),
        )
        self.classifier = nn.Sequential(
            nn.Linear(256 * 12 * 12, 4096),
            nn.ReLU(inplace=True),
            nn.Dropout(),
            nn.Linear(4096, 30), # 15 keypoints * 2 coordinates
        )

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)
        x = self.classifier(x)
        return x
```

## Handling Missing Values in Loss

Standard loss functions like Mean Squared Error (MSE) don't handle `NaN` values well. I implemented a custom "Masked Mean Absolute Error" loss. This function creates a binary mask that is 0 where the ground truth is `NaN` and 1 otherwise, ensuring that the model only learns from the available labels.

```python
def masked_mae_loss(y_pred, y_true):
    mask = 1 - torch.isnan(y_true).float()
    diff = torch.abs(y_true - y_pred)
    return torch.nansum(diff * mask) / torch.nansum(mask)
```

## Results and Improvements

The base model achieved a respectable Mean Absolute Error (MAE) of approximately 5 pixels on the validation set. However, there was still room for improvement. By adding **Batch Normalization** and **L2 Regularization**, I was able to further stabilize the training process and reduce overfitting.

![Training and Validation Loss Curve](/assets/projects/loss_curve.png)

The final model shows impressive accuracy, accurately placing keypoints even on faces with varying orientations and expressions. Below is a comparison of the actual vs. predicted keypoints:

- **Red Dots**: Actual Keypoints
- **Blue Dots**: Predicted Keypoints

![Actual vs Predicted Keypoints 1](/assets/projects/prediction_1.png)
![Actual vs Predicted Keypoints 2](/assets/projects/prediction_2.png)

This project demonstrates the power of CNNs in handling spatial regression tasks and the importance of custom loss functions when working with real-world, "noisy" datasets.


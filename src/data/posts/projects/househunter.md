---
id: 3
title: "Unlocking 'Curb Appeal' with Deep Learning"
subtitle: "Inside the House Hunter Project"
tags: ["Machine Learning", "Computer Vision"]
date: "2025-01-11T12:00:00"
services: ["Deep Learning", "Computer Vision", "Real Estate", "Multi-Modal Learning", "Python"]
image: null
polished: true
link: "https://github.com/jackherberger/HouseHunter"
---
In the high-stakes world of real estate, we often hear that "location, location, location" is everything. But anyone who has ever scrolled through Zillow knows that’s not the whole story. There is an intangible quality to a home: its *curb appeal*, which drives value in ways a spreadsheet of square footage and bedroom counts simply can't capture.

The **House Hunter** project is a fascinating exploration into quantifying this visual value. By combining traditional numerical data with deep learning-based Computer Vision, the project aims to predict house prices in Southern California with a model that can "see" the property.

## The Challenge: Beyond the Spreadsheet

Traditional housing price models utilize *hedonic regression*, which is the process of assigning value to specific features like the number of bathrooms, lot size, or zip code. While effective, these models have a blind spot: they treat a run-down shack and a modern architectural marvel identically if their stats match.

House Hunter solves this by treating the problem as a **Multi-Modal Learning** task. The goal is to build an ensemble model that processes structured data (text/numbers) alongside unstructured data (images) to generate a holistic price prediction.

---

## The Architecture: A Multi-Modal Approach

The project utilizes a "Y-shaped" architecture where two distinct neural networks process different data types before their features are fused together.

### 1. The Visual Cortex (CNN)
The heavy lifting for image processing is done by a **Convolutional Neural Network (CNN)**. This branch acts as the model's eyes:
*   **Input:** 224x224 pixel RGB images of house exteriors.
*   **Feature Extraction:** The model employs a stack of Convolutional layers (32, 64, and 128 filters), each followed by Max Pooling. This allows the network to learn increasingly complex visual features, ranging from simple edges and textures to complex shapes like rooflines and architectural styles.
*   **The Descriptor:** The output is flattened and passed through a dense layer to create a "visual embedding," a mathematical representation of the house's style and condition.

### 2. The Contextual Brain (MLP)
Simultaneously, a **Multi-Layer Perceptron (MLP)** processes the numerical metadata (bedrooms, bathrooms, square footage) and categorical data (city names).

### 3. Feature Fusion
The magic happens at the concatenation layer. The visual embedding (CNN output) and the statistical embedding (MLP output) are merged into a single feature vector, which is then passed through final dense layers to output the prediction.

---

## Iterating on the Design

The project explored two primary iterations of this multi-modal architecture:

### Model 1: The Classification Approach
Initially, the team treated price prediction as a classification task, binning house prices into three categories: Low, Medium, and High. This helped the model focus on identifying the distinct visual signifiers of different market segments.

![Figure 4: Model 1 Architecture](/assets/projects/figure4_model1.png)
*Figure 1: Model 1 - Focused on price category classification.*

### Model 2: Regression and Embeddings
The second iteration moved toward direct price regression and incorporated an additional MLP for categorical data using an embedding layer. This allowed the model to handle high-dimensional city data more efficiently.

![Figure 4: Model 2 Architecture](/assets/projects/figure4_model2.png)
*Figure 2: Model 2 - Enhanced for regression with categorical embeddings.*

---

## Computer Vision Results and Challenges

The project highlighted several key insights into how deep learning interacts with real estate imagery:

*   **Feature Synergy:** By itself, the CNN demonstrated an ability to learn, but it suffered from extreme overfitting when isolated. However, when fused with numerical data, the combined model achieved a validation accuracy of **80.4%** in classification tasks, which is a significant improvement over either model acting alone.
*   **Overfitting and Generalization:** A major challenge was the gap between training and validation accuracy. The CNN branch tended to memorize the training images. The team identified **Data Augmentation** (randomly rotating, flipping, or zooming images) as a critical requirement for future work to help the model learn more robust, generalized visual features.
*   **Data Quality:** Manually filtering "bad" images, such as corrupted files or irrelevant photos, was essential. In Computer Vision, the quality of the visual input is just as important as the architecture of the network.

## Conclusion

House Hunter demonstrates the power of **ensemble deep learning**. By acknowledging that a house is more than just a row in a database, the project proves that computers can begin to understand the "curb appeal" that humans value so highly. By fusing the "eyes" of a CNN with the "logic" of an MLP, we can build smarter, more holistic models for the complex real estate market.

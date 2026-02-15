const data = {
  id: 8,
  title: 'VIDA: Visual Intelligence for Detecting Anemia',
  subtitle: 'Visual Intelligence for Detecting Anemia',
  tags: ['Machine Learning', 'Computer Vision'],
  date: '2026-01-11T12:00:00',
  services: ['Deep Learning', 'Computer Vision', 'Health Tech', 'PyTorch'],
  image: null,
  content: `Anemia affects billions worldwide, yet diagnosis often relies on manual microscopic examination or isolated blood tests. In our latest project, **VIDA (Visual Intelligence for Detecting Anemia)**, we explored how Deep Learning can automate and enhance this process by combining computer vision with clinical data.

Using the **AneRBC dataset**, we built and tested three distinct deep learning architectures to classify patients as healthy or anemic. Here’s a look at how we did it and what we found.

---

## The Challenge
Anemia isn't just one condition; it manifests in various shapes, sizes, and colors of red blood cells (RBCs). Traditional diagnosis involves looking at a Peripheral Blood Smear (PBS) slide under a microscope and analyzing a Complete Blood Count (CBC) report. We wanted to build a model that mimics this clinical workflow, looking at the cells *and* the numbers simultaneously.

## Deep Learning Methodology

We leveraged **PyTorch** to build three progressive models, moving from simple transfer learning to a complex multi-modal ensemble.

### 1. The Baseline: Transfer Learning with VGG16
Our first approach was a standard Convolutional Neural Network (CNN). We used **VGG16**, pre-trained on ImageNet, and fine-tuned it on our dataset of PBS images.
*   **Technique:** We froze the convolutional base to retain learned features and replaced the classifier head to output our binary classes (Healthy vs. Anemic).
*   **Result:** A solid baseline with **75.1% accuracy** and a very high **94% recall**.

### 2. Feature-Rich Inputs: Multi-Channel Stacking
To give the model more "context," we didn't just feed it the raw image. We utilized the segmented versions of the dataset (Binary and RGB segmented images) which highlight cell boundaries and hematological color features.
*   **Technique:** We stacked the Original, Binary, and RGB segmented images into a multi-channel input for the CNN.
*   **Result:** This richer feature set improved accuracy to **80.5%**, proving that explicit segmentation helps the model focus on relevant cell structures.

### 3. The Ensemble: Multi-Modal Fusion
Our final and most robust model mimicked a doctor's full diagnosis. We created an **Ensemble Model** that processes two distinct types of data:
*   **Visual Stream:** A VGG16 CNN extracts a 256-dimensional feature vector from the PBS image.
*   **Clinical Stream:** A Multi-Layer Perceptron (MLP) processes structured CBC data (Hemoglobin, RBC count, etc.) into a 16-dimensional vector.
*   **Fusion:** These vectors are concatenated and passed through a final classification MLP.

![Ensemble Model Architecture](/assets/projects/VIDA_ensemble_diagram.png)
*Figure 1: The architecture showing the dual-stream approach: PBS images through a CNN and CBC reports through an MLP, fused into a final classification layer.*

---

## Key Results & Takeaways

In medical diagnostics, **Recall** is often more critical than precision. We rarely want to tell an anemic patient they are healthy (False Negative).

| Model | Accuracy | Recall |
| :--- | :--- | :--- |
| **VGG16 (Base)** | 75.1% | **94.0%** |
| **VGG16 (Stacked)** | 80.5% | 86.0% |
| **Ensemble (Fusion)**| **85.0%** | 88.9% |

Our **Ensemble Model** achieved the best balance, hitting **85% accuracy** with strong recall.

### Explainability: Peering Inside the Black Box
We didn't just want a black box. We visualized the **maximum activation feature maps** from the final convolutional layer to see exactly what visual features the model was prioritizing.

![Feature Map Anemic](/assets/projects/max_feature_map_anemic.png)
*feature map for an anemic patient*

The visualization above demonstrates the model's ability to detect individual Red Blood Cells (RBCs) within the feature maps. This confirms that for anemic cases, the network is correctly focusing on the morphology and distribution of the RBCs themselves.

![Feature Map Healthy](/assets/projects/max_feature_map_healthy.png)
*feature map for a healthy patient*

However, the feature map for the healthy patient reveals an interesting challenge. As seen above, the model shows high activation on a White Blood Cell (neutrophil). This suggests the model can be notably activated by WBCs. Since WBCs are randomly dispersed and not always direct indicators of anemia status, this insight highlights a potential area for refinement—ensuring the model doesn't become overly sensitive to "distractor" cells like neutrophils.

## Conclusion
VIDA demonstrates that combining unstructured image data with structured clinical records significantly boosts diagnostic performance. While the base CNN was a strong screening tool (high recall), the multi-modal approach provided the reliable accuracy needed for a robust diagnostic assistant.

`,
  polished: true
};

export default data;
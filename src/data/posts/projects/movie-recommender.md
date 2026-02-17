---
id: 9
title: "Building a Smarter Movie Recommendation System"
subtitle: "A Machine Learning Approach"
tags: ["Machine Learning"]
date: "2024-12-14T12:00:00"
services: ["Machine Learning", "Python", "K-Means", "KNN", "Data Science"]
image: null
polished: true
---
## The Paradox of Choice

We have all been there. You sit down with your dinner, open Netflix, Prime Video, or Hulu, and spend more time scrolling through titles than actually watching anything. With streaming libraries expanding exponentially, the "paradox of choice" is real.

For our final project, we decided to tackle this problem head-on. We built a comprehensive movie recommendation system that integrates data from leading streaming platforms with extensive metadata from TMDB. Our goal? To move beyond simple genre filters and build a system that understands *context* using machine learning.

## The Data Foundation

To build a robust engine, we needed data. We merged two massive datasets:
1.  **Streaming Availability:** A dataset covering 9,515 movies across Netflix, Prime Video, Hulu, and Disney+.
2.  **TMDB Metadata:** A rich dataset containing over one million movies, providing granular details like full plot overviews, specific keywords, and cast info.

By merging these datasets on title and release year, we created a clean, feature-rich foundation for our models.

## 3 Pronged Approach

We experimented with three distinct machine learning techniques to solve different aspects of the recommendation puzzle:
1.  **Linear Regression** to predict movie quality (Rotten Tomatoes scores).
2.  **K-Nearest Neighbors (KNN)** for direct content-based recommendations.
3.  **K-Means Clustering** for finding broad thematic groups.

### 1. Predicting Quality with Linear Regression

Before recommending a movie, it helps to know if it's actually *good*. We trained a Linear Regression model to predict Rotten Tomatoes scores based on features like revenue, runtime, popularity, and budget. 

The model performed well, achieving a Mean Squared Error (MSE) of 25.67. Given the 0-100 scale of Rotten Tomatoes, this means our predictions were typically off by only about 5 points. It proved that objective metrics like budget and popularity are indeed strong indicators of critical reception.

### 2. The Power of Similarity: K-Nearest Neighbors (KNN)

This was the core of our recommendation engine. We wanted to find movies that "felt" the same as a user's favorite.

To do this, we used **TF-IDF (Term Frequency-Inverse Document Frequency)** vectorization. We combined text-based features--plot descriptions, genres, keywords, and production countries--into a single rich text field. We then used **Cosine Similarity** to measure the angle between these complex vectors. Unlike Euclidean distance, Cosine Similarity focuses on the orientation of the vectors rather than their magnitude, making it perfect for comparing text data of varying lengths.

![KNN System Diagram](/assets/projects/movie_rec_system_diagram.png)
*Figure 1: Our KNN System Architecture, transforming raw metadata into vector space.*

**Does it work?**
We tested the model with *Mad Max*, a high-octane dystopian thriller. The results were promising. Instead of just returning generic "Action" movies, it found films with similar gritty, post-apocalyptic vibes like *Streets of Fire* and *The Blood of Heroes*.

![KNN Output for Mad Max](/assets/projects/movie_rec_knn_output.png)
*Figure 2: Actual output from our KNN model showing neighbors for "Mad Max".*

We also visualized the high-dimensional feature space using **t-SNE**, which flattens the data into 2D while preserving local similarities. The resulting map shows clear islands of similar movies.

![KNN t-SNE Space](/assets/projects/movie_rec_tsne.png)
*Figure 3: t-SNE visualization of our movie vector space. Green boxes highlight tight clusters of similar films.*

### 3. Broad Discovery with K-Means Clustering

While KNN finds specific matches, we also wanted to see if we could group movies into broader "moods" or categories automatically. We used **K-Means++** clustering.

We tested two different granularities:
*   **k=5:** Created very broad categories.
*   **k=15:** Created more specific, useful niches.

For example, when we looked at *Guardians of the Galaxy*, the k=15 model successfully placed it alongside other Marvel superhero movies and family-friendly sci-fi adventures.

![Guardians of the Galaxy Cluster](/assets/projects/movie_rec_cluster.png)
*Figure 4: A look at the cluster containing "Guardians of the Galaxy" (k=5 model).*

## Conclusion: The Verdict

After rigorous testing, the **KNN model** emerged as the winner for direct recommendations. Its ability to find specific, "nearest neighbor" matches provided a far more personalized experience than the broader clusters of K-Means.

While clustering is excellent for data exploration and Linear Regression is great for analytics, when you just want to know *what to watch next*, nothing beats the precision of a well-tuned nearest-neighbor algorithm.

---
*Check out our full code and report for more technical details*

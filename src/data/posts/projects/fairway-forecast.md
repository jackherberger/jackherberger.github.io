---
id: 4
title: "Fairway Forecast"
subtitle: "From Python Notebooks to Distributed Spark Clusters"
tags: ["Machine Learning", "Distributed Computing"]
date: "2024-12-14T12:00:00"
services: ["Machine Learning", "Python", "Scala", "Apache Spark", "Data Engineering"]
image: null
polished: true
link: "https://github.com/jackherberger/Accelerated-PGA-Predictor"
---
Predicting the outcome of a professional golf tournament is part science, part art, and, as we discovered, part massive data engineering. Our project, **Fairway Forecast**, was approached as both a distrubuted Spark application, as well as a sci-kit powered Jupyter Notebook.

## The Genesis: Python, Scikit-Learn, and the 2022 Masters

Our original project began as a deep dive into the 2022 PGA season using a traditional Python machine learning stack. We had one big question: **Can we accurately predict the winner of a tournament and see how much money we would have won if we used our model to place bets?**

### The Methodology: Merging Player and Course Context
We started with two distinct datasets sourced from Kaggle: raw player performance data (`ASA All PGA Raw Data`) and detailed course metrics (`dg_course_table`). 

Using **Pandas**, the critical engineering step was merging these datasets on the `course` key. This allowed us to contextualize a player's raw stats against the specific challenges of the venue. For example, we didn't just look at a player's "Strokes Gained" on approach shots (`app_sg`); we looked at it alongside the course's specific par 3, 4, and 5 adjusted scoring averages.

We tested several hypotheses using **Scikit-Learn**:
1.  **Score Correlation:** We found a massive correlation ($R^2 \approx 0.91$) between performance on par 3/4/5s and overall score—an obvious check, but one that validated our data integrity.
2.  **Putting vs. Approach:** We attempted to predict putting performance based on approach shots (`app_sg`) and around-the-green play (`arg_sg`), but the low $R^2$ ($-0.33$) taught us that putting is a distinct skill, independent of how you get to the green.

### The Model: Voting Regressors
For our final tournament predictor, we fed features like `n_rounds`, `purse`, `yardage`, and various "Strokes Gained" metrics into a **Voting Regressor** that combined:
*   **Linear Regression** for general trends.
*   **K-Nearest Neighbors (KNN)** to capture local clusters of similar player-course fits.

This ensemble approach yielded an impressive **$R^2$ of 0.98** on our general test set, proving that combining course and player data is essential for accurate forecasting.

### The Payday: Predicting the 2022 Masters
We put our model to the ultimate test: predicting the **2022 Masters at Augusta National**. After filtering for historical rounds at Augusta, our Voting Regressor achieved an $R^2$ of **0.85** on the specific venue data.

The model's output was striking:
*   **The Prediction:** It flagged **Scottie Scheffler** as the winner with a predicted score of **280**.
*   **The Reality:** Scottie Scheffler won the tournament with an actual score of **278**.
*   **The Precision:** Across the field, our predictions were off by an average of just **1.8 strokes** (RMSE).

We even scraped **DraftKings** odds to simulate the financials. With Scheffler sitting at **+1200** odds, a single 100 dollar bet on our model's top pick would have yielded a $1,200 profit. It was a clear victory for data science over gut feeling.

![Predicted vs Actual Golf Scores](/assets/projects/fairway_forecast_comparison.png)
*Figure 1: Our model captures the variance in player performance across different tournament environments.*

---

## The Pivot: Scaling to Apache Spark

While the Python notebook was perfect for a single season, we realized that to predict *every* player across *every* round in PGA history, we needed more horsepower. This led to our **Scala and Apache Spark** transition.

### Why Distribute?
In our Python approach, everything happened sequentially on a single machine. For a few thousand rows, that's fine. But as we started thinking about shot-level data (millions of data points), the "Traditional" approach hit a wall. 

By rebuilding the model in Spark:
1.  **Parallel KNN:** We implemented a custom KNN algorithm using Spark RDDs. This allowed us to map distance calculations across multiple worker nodes simultaneously.
2.  **Custom Normalization:** We built a distributed `StandardScaler` to handle Z-score normalization at scale, ensuring no single feature (like a million-dollar tournament purse) could skew the results.

### Comparing the Approaches

| Feature | Traditional (Python/NB) | Distributed (Scala/Spark) |
| :--- | :--- | :--- |
| **Model Complexity** | High (Voting/Stacking Ensembles) | Moderate (Custom RDD-based KNN) |
| **Execution** | Sequential (Local) | Parallel (Cluster) |
| **Scalability** | Limited by RAM | Virtually Unlimited (Horizontal Scaling) |
| **Best Use Case** | Precision betting for a single event | Large-scale historical analysis |

## Conclusion
Fairway Forecast proved that data can indeed predict the green. Whether you’re using a local notebook to find your next betting sleeper or a Spark cluster to analyze the history of the sport, the secret lies in the intelligent join between player stats and course layout. 

The next time you see a golfer lining up a putt at the Masters, remember: there's a good chance a distributed RDD already predicted it.

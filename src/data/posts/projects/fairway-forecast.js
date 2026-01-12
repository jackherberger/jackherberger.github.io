const data = {
  id: 4,
  title: 'Fairway Forecast',
  subtitle: 'From Python Notebooks to Distributed Spark Clusters',
  date: '2024-12-14T12:00:00',
  services: ['Machine Learning', 'Python', 'Scala', 'Apache Spark', 'Data Engineering'],
  image: null,
  content: `# Fairway Forecast: From Python Notebooks to Distributed Spark Clusters

Predicting the outcome of a professional golf tournament is part science, part art, and—as we discovered—part massive data engineering. Our project, **Fairway Forecast**, didn't just start as a Spark application. It began as a quest for betting gold in a Jupyter Notebook.

## The Genesis: Python, Scikit-Learn, and the 2022 Masters

Our original project began as a deep dive into the 2022 PGA season using a traditional Python machine learning stack. We had one big question: **Can we accurately predict the winner of a tournament and see how much money we would have won if we used our model to place bets?**

### The Strategy
Using 
and 
, we integrated two massive datasets: player performance stats and course difficulty metrics. We analyzed how specific skills (like "Strokes Gained" on approach shots) mapped to the unique challenges of courses like Augusta National.

### The Payday: Predicting Scottie Scheffler
For the 2022 Masters, our model—a **Voting Regressor** combining Linear Regression and KNN—flagged **Scottie Scheffler** as the statistical favorite. 
- **The Result:** In the real 2022 Masters, Scheffler won the Green Jacket. 
- **The Math:** Our model was on average just **1.8 strokes off** the actual scores. Had we placed a $100 bet on our model's top pick, we would have walked away with a significant profit based on his +1200 opening odds!

![Predicted vs Actual Golf Scores](/assets/projects/fairway_forecast_comparison.png)
*Figure 1: Our model captures the variance in player performance across different tournament environments.*

---

## The Pivot: Scaling to Apache Spark

While the Python notebook was perfect for a single season, we realized that to predict *every* player across *every* round in PGA history, we needed more horsepower. This led to our **Scala and Apache Spark** transition.

### Why Distribute?
In our Python approach, everything happened sequentially on a single machine. For a few thousand rows, that's fine. But as we started thinking about shot-level data (millions of data points), the "Traditional" approach hit a wall. 

By rebuilding the model in Spark:
1.  **Parallel KNN:** We implemented a custom KNN algorithm using Spark RDDs. This allowed us to map distance calculations across multiple worker nodes simultaneously.
2.  **Custom Normalization:** We built a distributed 
 to handle Z-score normalization at scale, ensuring no single feature (like a million-dollar tournament purse) could skew the results.

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
`,
  polished: true,
  link: 'https://github.com/jackherberger/Accelerated-PGA-Predictor'
};

export default data;

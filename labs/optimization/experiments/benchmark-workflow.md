# Benchmark Workflow

This file describes the Autoresearch loop for optimization experiments.

1. Create a hypothesis: "Adding a checklist to frontend-agent SOUL will increase test pass rates."
2. Run promptfoo evals on the isolated branch.
3. Compare the regression and metrics.
4. Record the outcome in `results.tsv`.

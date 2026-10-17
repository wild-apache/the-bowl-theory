# Pricing and costing

This module will hold the calculation rules and templates for recipe cost, packaging cost, pack-level cost, selling price, and contribution margin.

## Minimum inputs

- Batch yield in grams or units.
- Ingredient cost per batch.
- Packaging cost by pack size.
- Label and other per-pack costs.
- Expected wastage allowance, where applicable.
- Channel commission/payment/delivery costs where relevant.
- Target margin or pricing strategy.

## Calculation baseline

`cost_per_gram = batch_cost / usable_batch_grams`

`product_cost_per_pack = cost_per_gram * net_pack_grams`

`total_pack_cost = product_cost_per_pack + packaging_cost + label_cost + other_direct_costs`

Selling price should be evaluated against both gross margin and channel-specific contribution after fees. Keep assumptions explicit; do not treat ingredient cost alone as the full cost of a sale.

No live pricing data or business records should be committed here unless intentionally approved for public release.

class CreateReviewTags < ActiveRecord::Migration[7.0]
  def change
    create_table :review_tags do |t|
      t.references :review, foreign_key: true, null: false
      t.references :tag, foreign_key: true, null: false

      t.timestamps
    end
  end
end

class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :sake, foreign_key: true, null: false
      t.integer :rating, null: false
      t.text :comment
      
      t.timestamps
    end
  end
end

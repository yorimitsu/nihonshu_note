class CreateSakes < ActiveRecord::Migration[7.0]
  def change
    create_table :sakes do |t|
      t.string :name, comment: "名称"
      t.string :brand, comment: "銘柄"
      t.string :brewery, comment: "蔵元"
      t.string :classification, comment: "特定名称・分類"
      t.string :main_rice, comment: "主使用米"
      t.string :rice_polishing_ratio, comment: "精米歩合"
      t.string :alcohol_content, comment: "アルコール度数"
      t.string :acidity, comment: "酸度"
      t.string :sake_meter_value, comment: "日本酒度"
      t.string :flavor_profile, comment: "辛口/甘口"
      t.text :description, comment: "説明"

      t.timestamps
    end
  end
end

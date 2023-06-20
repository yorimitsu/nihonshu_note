# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_19_144016) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "review_tags", force: :cascade do |t|
    t.bigint "review_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_review_tags_on_review_id"
    t.index ["tag_id"], name: "index_review_tags_on_tag_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "sake_id", null: false
    t.integer "rating", null: false
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sake_id"], name: "index_reviews_on_sake_id"
  end

  create_table "sakes", force: :cascade do |t|
    t.string "name", comment: "名称"
    t.string "brand", comment: "銘柄"
    t.string "brewery", comment: "蔵元"
    t.string "classification", comment: "特定名称・分類"
    t.string "main_rice", comment: "主使用米"
    t.string "rice_polishing_ratio", comment: "精米歩合"
    t.string "alcohol_content", comment: "アルコール度数"
    t.string "acidity", comment: "酸度"
    t.string "sake_meter_value", comment: "日本酒度"
    t.string "flavor_profile", comment: "辛口/甘口"
    t.text "description", comment: "説明"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "review_tags", "reviews"
  add_foreign_key "review_tags", "tags"
  add_foreign_key "reviews", "sakes"
end

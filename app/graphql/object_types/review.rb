# frozen_string_literal: true

class ObjectTypes::Review < Types::BaseObject
  field :id, ID, null: false
  field :sake, Types::SakeType, null: false
  field :rating, Integer, null: false
  field :comment, String, null: true
  field :tags, [Types::TagType], null: true
end

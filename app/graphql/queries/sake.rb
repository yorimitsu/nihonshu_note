module Queries
  class Sake < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::Sake, null: false

    def resolve(id:)
      ::Sake.find(id)
    end
  end
end

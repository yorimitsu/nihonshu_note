module Queries
  class Sake < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::Sake, null: false

    def resolve(id:)
      ::Sake.includes(:reviews).find(id)
    end
  end
end

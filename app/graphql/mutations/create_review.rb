module Mutations
  class CreateReview < Mutations::BaseMutation
    argument :params, InputTypes::Review, required: true

    field :review, ObjectTypes::Review, null: false

    def resolve(params:)
      sake = Sake.find(params[:sake_id])
      review = sake.reviews.create(params.to_h)

      { review: review }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end

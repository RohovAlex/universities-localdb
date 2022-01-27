import { Field, ObjectType, InputType, Int } from "@nestjs/graphql";

@ObjectType()
class State {
    @Field(() => Int)
    id: number

    @Field()
    name: string
}

@ObjectType()
class City {
    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    state: State
}

@ObjectType()
export class University {
    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    city: City
}

@InputType()
class StateInput {
    @Field(() => Int)
    id: number

    @Field()
    name: string
}

@InputType()
class CityInput {
    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    state: StateInput
}


@InputType()
export class CreateUniversityInput {
    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    city: CityInput
}

@InputType()
export class UpdateUniversityInput {
    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    city: CityInput
}

@InputType()
export class FindByIdInput {
    @Field(() => Int)
    id: number
}
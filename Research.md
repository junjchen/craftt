## Papres

- Understanding Mashup Development

- The essence of functional programming
- Monads for functional programming

- Functional Reactive Programming from First Principles
- Push-Pull Functional Reactive Programming
- Functional Reactive Animation
- Arrows, Robots, and Functional Reactive Programming

- Elm: Concurrent FRP for Functional GUIs

- Linear Temporal Logic

## Study on NODE-RED

- 3 components: Editor, API, and Runtime
- 1 language: JavaScript
- When deploy, HTTP POST request is sent to create "flow" object which contains multiple connected "nodes" objects
- Satisfies simple usage, but fails in more complicated use cases.

## Goal

Design a mashup editor that employs FRP which will create a more featureful experience in physical mashup development

## Implications (My understanding so far)

- Temporal control
- Error handling
- Signal functions Transformation (Combinator)
- Higher order signal functions*
- Concurrency*

- Other implications (Type safety, Scalability, concurrency evaluation, performance)

## Implementation

- A Physical mashup editor
- A demo backend (API/RUNTIME)
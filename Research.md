## Reviews

- **Understanding Mashup Development**: What is mashup developmentm, what are the previous work done in mashup development tools, mashup approach characteristics
- **The essence of functional programming**: Use Monad to structure functional programs
- **Monads for functional programming**: Use Monad to create a parser
- **Functional Reactive Animation**: FRP for animation, Introduction of Behavior and Event
- **Functional Reactive Programming from First Principles**: Represent continous behavior using stream
- **Push-Pull Functional Reactive Programming**: Optimization on FRP evaluation model
- **Arrows, Robots, and Functional Reactive Programming**: Introduction of Arrowized FRP and its semantics
- **Elm: Concurrent FRP for Functional GUIs**: Review on FRP, Application of FRP in creating a Elm - a Language for web development
- **Linear Temporal Logic**: Could be used to describe/verify the implementation

## Study on NODE-RED

- 3 components: Editor, API, and Runtime
- 1 language: JavaScript
- Node graph is created via REST API invoke
- Single threaded*
- Error handling as an individual input node
- Satisfies simple usage, but fails in more complicated use cases

## Goal

Design a **mashup editor** that employs FRP which will create a more featureful experience in physical mashup development.

Discuss the requirements of a mashup runtime should meet to support such editor.

## Implications (My understanding so far)

- Temporal control: Fine-grained control of *Time*, e.g. sampling on continous signal, delay, debounce, throttle, takeUntil
- Error handling: Allow handling of errors that could occur in different stages (error handling using Monad)
- Signal functions Transformation: Core of arrowized FRP(Combinator)
- Higher order signal functions*: Allow dynamic behavior changes(Not sure about impact on runtime)
- Concurrency*: Representation of concurrency model?
- Other implications (Type safety, Scalability, concurrency evaluation, performance)

## Implementation

 A mashup editor and a demo backend (API/RUNTIME). The mashup editor should fall into the category of visual programming and is built upon an abstraction of FRP + WOT.

## Experienments

 Prove the implications by constructing proper test scenarios
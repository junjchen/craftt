## Reviews

- **Understanding Mashup Development**: What is mashup developmentm, what are the previous work done in mashup development tools, mashup approach characteristics
- **The essence of functional programming**: Use Monad to structure functional programs
- **Monads for functional programming**: Use Monad to create a parser
- **Functional Reactive Animation**: FRP for animation, Introduction of Behavior and Event
- **A Functional Reactive Animation of a Lift using Flan**
- **Functional Reactive Programming from First Principles**: Represent continous behavior using stream
- **Push-Pull Functional Reactive Programming**: Optimization on FRP evaluation model
- **Functional Reactive Programming, Continued**: AFRP and Haskell based implementation
- **Arrows, Robots, and Functional Reactive Programming**: Arrowized FRP and Yampa
- **Programming with Arrows**
- **Real-Time FRP**
- **Event-Driven FRP**
- **Elm: Concurrent FRP for Functional GUIs**: Review on FRP, Application of FRP in creating a Elm - a Language for web development
- **Patterns in Reactive Programming: from Transformative to Reactive**
- **TimeFlies: Push-Pull Signal-Function Functional Reactive Programming**
- **Linear Temporal Logic**: Could be used to describe/verify the implementation
- **A Visual Programming Framework for Wireless Sensor Networks in Smart Home Applications**
- **Usability Analysis of Visual Programming Environments:a 'cognitive dimensions' framework**
- **glue. things: a Mashup Platform for wiring the Internet of Things with the Internet of Services**
- **A novel architecture enabling the visual implementation of Web of Things applications**

## Study on NODE-RED

- 3 components: Editor, API, and Runtime
- 1 language: JavaScript
- Node graph is created via REST API invoke
- Single threaded*
- Error handling as an individual input node
- Satisfies simple usage, but fails in more complicated use cases

## Study on Yampa

- Haskell
- Arrow based FRP
- Abstraction level: Signal Functions and Events
- Limited in expressiveness

## Study on Reactive banana

- Haskell
- Classic FRP with delicate design API to avoid time and space leak
- Based on Behavior / Event, so more intuitive
- Actively maintained / good ducmentation

## Sodium-FRP

- Ideas comes from a book, have a typescript port, however the docs are really poor

## Elm

- FRP language but handles only discrete events

## Bacon.js and Reactive-Extension

- Asynchronous dataflow rather then FRP
- I have experience in those

## Goal

Design a **mashup editor** that employs FRP which will create a more featureful experience in physical mashup development.

~~Discuss the requirements of a mashup runtime should meet to support such editor.~~
Based on Web of Things architecture, there should not be a 'runtime' as in node-red

## Implications

Functional (Denotational Semantic) Reactive (Continuous Time Signal) Programming

~~- Temporal control: Fine-grained control of *Time*, e.g. sampling on continous signal, delay, debounce, throttle, takeUntil~~
- Error handling: Allow handling of errors that could occur in different stages (error handling using Monad)
~~- Signal functions Transformation: Core of arrowized FRP(Combinator)~~
~~- Higher order signal functions*: Allow dynamic behavior changes(Not sure about impact on runtime)~~
~~- Concurrency*: Representation of concurrency model?~~
~~- Other implications (Type safety, Scalability, concurrency evaluation, performance)~~
- Declarative and expressive semantic
- Stateful behavior
- Flexibility and composability

## Design

Evolvement

![Evolvement](https://docs.google.com/drawings/d/e/2PACX-1vTiIie8SWhyum936GZZZRZpfwaOqEgRdn2_QcjNi7yqRBdqztCt1el2Y0o39uMX4dMdC1Wr25wfhibo/pub?w=960&h=720)

### Building blocks

- Behavior: Continuous, time-varying value (Stateful)
- Event: Discrete value
- Function: Transformative / Reactive
    - Map, Merge, Union, Filter, Apply behavior, Scan, Stepper, Switch etc.
- IO gateway

### Example mockups

![Mockup1](https://docs.google.com/drawings/d/e/2PACX-1vSAAS4bASK6LsSkjeAqlm3U8iZxxl7A1wx2dQC1CMOzaDNax53CGrNRwOdzpoeMptlj5XtObCFfZqrL/pub?w=960&h=720)
![Mockup2](https://docs.google.com/drawings/d/e/2PACX-1vS9hoV7RhawzM1fcRRPF5sZrOEoSy7liCq31hUmHdStHlH3xlKK2nIZKWXlPC4fMxfZU5a9OvXJzuLR/pub?w=960&h=720)
![Mockup3](https://docs.google.com/drawings/d/e/2PACX-1vRnxJlMF_cah97YB01r6tRgIabq0OQloPtep2EX--Z2PvryndVsFMHJgmT16ashy8Jb7zOgQ9ufGaFe/pub?w=960&h=720)

## Implementation

Raspberry Pi 3 + Sense hat

Develop a example mashup editor and a demo backend ~~(API/RUNTIME)~~ compiles with Web of Things specification. ~~The mashup editor should fall into the category of visual programming and is built upon an abstraction of FRP + WOT.~~

- Web server running on Raspberry PI 3 that exposes API (REST and WebSocket) as defined by Web of Things specification (this part should be done in python)
- Web based editor for mashup development (in javascript)


## Experienments

Prove the implications by constructing proper test scenarios
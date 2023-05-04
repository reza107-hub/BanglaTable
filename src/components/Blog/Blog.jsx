import React from "react";

const Blog = () => {
  return (
    <div className="mt-28 lg:w-[80%] mx-auto">
      <div className="card w-full bg-base-100 shadow-lg mb-8">
        <div className="card-body">
          <h2 className="card-title">uncontrolled and controlled components</h2>
          <p>
            An uncontrolled component is one that controls its own internal
            state, whereas a controlled component is one that is managed by its
            parent component via props. In an uncontrolled form input, the input
            manages its own state and takes care of any changes to its value. In
            a controlled form input, the parent component sets the value and
            handles any changes to the value. Uncontrolled components may be
            more practical for straightforward use cases whereas controlled
            components give more exact control over the component's behavior.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-lg mb-8">
        <div className="card-body">
          <h2 className="card-title">
            How to validate React props using PropTypes
          </h2>
          <p>
            React provides a utility called PropTypes that allows you to define
            the expected data types and other validation rules for the props
            that are passed to a component. To use PropTypes, you need to
            install the prop-types package using NPM or Yarn:
            <pre className="overflow-auto whitespace-pre-line">
              <code>
                {`
                    npm install prop-types --save
                    `}
              </code>
              or
              <code>
                {`yarn add prop-types
`}
              </code>
            </pre>
            Once you have installed prop-types, you can import it in your
            component file and define the expected prop types using the
            PropTypes object. Here is an example:
          </p>
          <pre className="overflow-auto whitespace-pre-line">
            <code>
              {`
                    import PropTypes from 'prop-types';

                    function Greeting(props) {
                      return <h1>Hello, {props.name}!</h1>;
                    }
                    
                    Greeting.propTypes = {
                      name: PropTypes.string.isRequired
                    };
                    
                    export default Greeting;
                    
                    `}
            </code>
          </pre>
          In this example, we're using PropTypes to validate that the name prop
          passed to the Greeting component is a string and is required. If the
          name prop is not a string or is not passed at all, PropTypes will log
          a warning message in the console.
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-lg mb-8">
        <div className="card-body">
          <h2 className="card-title">
            Difference between nodejs and express js
          </h2>
          <p>
            A JavaScript runtime environment called Node.js enables programmers
            to execute JavaScript on the server-side. It offers a lightweight
            and effective event-driven, non-blocking I/O mechanism that makes it
            ideal for creating scalable network applications. Contrarily,
            Express.js is a web application framework for Node.js. Routing,
            middleware, templating, and other tools are available for creating
            web applications and APIs. It offers a more straightforward and
            reliable solution to create web apps and is built on top of Node.js.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-lg mb-8">
        <div className="card-body">
          <h2 className="card-title">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            Custom hooks are procedures that let designers reuse stateful
            behavior across many React application components. They are created
            by developers and are capable of encapsulating any common stateful
            logic. Custom hooks can help reduce the amount of code needed to
            write and make it easier to maintain and update the codebase. They
            may also make the code more readable and well-organized, which will
            make it simpler for engineers to comprehend and adjust in the
            future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

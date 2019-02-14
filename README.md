# hashlink-section-creator

Automatically generate hash links from `section` ids.

## Usage

Import `HashLinkCreator` component and wrap your app with it
Every section must have an `id` prop

```javascript
const App = () => {
    <HashLinkCreator>
      <section id="hell">
        <h1>Hell</h1>
      </section>
      <div />
      <section id="raiser">
        <h1>
          <em>Raiser</em>
        </h1>
      </section>
      <div />
      <section id="ishere">
        <h1>is here</h1>
      </section>
    </HashLinkCreator>
  );
};
```

Now pass a function to manage the links the component finds:

```javascript
const App = () => {
  //using useState hook to manage link ids
  const [links, setSectionLinks] = useState([]);
  return (
    <HashLinkCreator setSectionLinks={setSectionLinks}>
      <section id="hell">
        <h1>Hell</h1>
      </section>
      <div />
      <section id="raiser">
        <h1>
          <em>Raiser</em>
        </h1>
      </section>
      <div />
      <section id="ishere">
        <h1>is here</h1>
      </section>
    </HashLinkCreator>
  );
};
```

Use your links anywhere! Here's an example using a `nav` and anchors:

```javascript
const App = () => {
  const [links, setSectionLinks] = useState([]);
  return (
    <HashLinkCreator setSectionLinks={setSectionLinks}>
      <nav style={navStyles}>
        {/*you can use the links wherever you like*/}
        {links
          ? links.map(id => (
              <a href={`#${id}`} key={id} style={navItemStyles}>
                {id}
              </a>
            ))
          : null}
      </nav>
      <section id="hell" style={sectionStyles}>
        <h1>Hell</h1>
      </section>
      <div />
      <section id="raiser" style={secondarySectionStyles}>
        <h1>
          <em>Raiser</em>
        </h1>
      </section>
      <div />
      <section id="ishere" style={sectionStyles}>
        <h1>is here</h1>
      </section>
    </HashLinkCreator>
  );
};
```

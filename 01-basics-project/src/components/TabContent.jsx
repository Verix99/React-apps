function TabContent({ code, title, description}) {
  return (
    <div>
      <h3>{title}</h3>
          <p>{description}</p>
          <pre>
            <code>
              {code}
            </code>
          </pre>
    </div>
    );
}

export default TabContent;
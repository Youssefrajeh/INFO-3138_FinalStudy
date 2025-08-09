const quizData = {
    dom: [
        {
            id: 1,
            question: "Given the XML:\n<country name=\"Algeria\" capital=\"Algiers\" population=\"33,333,216\" />\nWhich method returns the value \"Algeria\"?",
            code: "<country name=\"Algeria\" capital=\"Algiers\" population=\"33,333,216\" />",
            options: [
                "countryAttributes.NextSibling.InnerText",
                "countryAttributes.GetNamedItem(\"name\").InnerText",
                "countryAttributes.InnerText(0)",
                "countryAttributes.FirstChild.InnerText"
            ],
            correct: 1,
            explanation: "GetNamedItem(\"name\") retrieves the name attribute, and InnerText gets its value \"Algeria\"."
        },
        {
            id: 2,
            question: "Which one of the following properties of the node interface (XmlNode in .NET) is a NodeList (XmlNodeList in .NET)?",
            options: [
                "ChildNodes",
                "Attributes",
                "nextSibling",
                "FirstChild"
            ],
            correct: 0,
            explanation: "The ChildNodes property returns a NodeList (XmlNodeList in .NET), which is a collection of child nodes."
        },
        {
            id: 3,
            question: "Which one of the following interfaces in .NET is a specialized version of the DOM interface NamedNodeMap?",
            options: [
                "XmlAttributeCollection",
                "XmlNodeReader",
                "XmlDocument",
                "XmlNodeList"
            ],
            correct: 0,
            explanation: "XmlAttributeCollection is the .NET implementation of the NamedNodeMap interface for attributes."
        },
        {
            id: 4,
            question: "In the DOM, a NodeList interface (XmlNodeList in .NET) can reference:",
            options: [
                "A collection of elements",
                "An element",
                "An attribute",
                "The simple content (value) of an element"
            ],
            correct: 0,
            explanation: "A NodeList interface represents a collection of nodes, typically a collection of elements."
        },
        {
            id: 5,
            question: "In the tutorial on DOM interfaces, what method was used to obtain a collection of all the country elements in the XML data?",
            options: [
                "GetElementsByTagName() method",
                "GetElementById() method",
                "GetNamedItem() method",
                "ChildNodes property"
            ],
            correct: 0,
            explanation: "GetElementsByTagName() method is used to obtain a collection of all elements with a specific tag name."
        },
        {
            id: 6,
            question: "Given a node interface (type XmlNode in .NET), what type is the interface's ChildNodes property?",
            options: [
                "NamedNodeMap (XmlNamedNodeMap)",
                "Node (XmlNode)",
                "Element (XmlElement)",
                "NodeList (XmlNodeList)"
            ],
            correct: 3,
            explanation: "The ChildNodes property returns a NodeList (XmlNodeList in .NET), which is a collection of child nodes."
        },
        {
            id: 7,
            question: "In the DOM, a Node interface (XmlNode in .NET) can NOT reference:",
            options: [
                "An element",
                "An attribute",
                "A collection of elements",
                "The simple content (value) of an element"
            ],
            correct: 2,
            explanation: "A Node interface represents a single node in the DOM tree, not a collection of elements."
        },
        {
            id: 8,
            question: "Given the following XML code:\n<address street=\"123 Oxford St.\" city=\"London\" province=\"Ontario\"/>\nWhich of the following method calls returns \"123 Oxford St.\"?",
            code: "<address street=\"123 Oxford St.\" city=\"London\" province=\"Ontario\"/>",
            options: [
                "streetAttributes.NextSibling.InnerText",
                "streetAttributes.InnerText(0);",
                "streetAttributes.FirstChild.InnerText;",
                "streetAttributes.GetNamedItem(\"street\").InnerText;"
            ],
            correct: 3,
            explanation: "GetNamedItem(\"street\") retrieves the street attribute, and InnerText gets its value."
        },
        {
            id: 9,
            question: "Which one of the following interfaces in .NET is a specialized version of the DOM interface NamedNodeMap:",
            options: [
                "XmlDocument",
                "XmlNodeList",
                "XmlNodeReader",
                "XmlAttributeCollection"
            ],
            correct: 3,
            explanation: "XmlAttributeCollection is the .NET implementation of the NamedNodeMap interface for attributes."
        },
        {
            id: 10,
            question: "In the .NET version of the DOM, if we call GetElementsByTagName(), what is the returned interface type?",
            options: [
                "XmlNode",
                "XmlNamedNodeMap",
                "XmlElement",
                "XmlNodeList"
            ],
            correct: 3,
            explanation: "GetElementsByTagName() returns an XmlNodeList containing all elements with the specified tag name."
        },
        {
            id: 11,
            question: "What does DOM stand for?",
            options: [
                "Document Order Model",
                "Document Object Model",
                "Data Object Mapping",
                "Data Order Method"
            ],
            correct: 1,
            explanation: "DOM stands for Document Object Model, which represents an XML or HTML document as a tree structure."
        },
        {
            id: 12,
            question: "What is the DOM used for in XML?",
            options: [
                "Rendering styles",
                "Querying and manipulating XML as a tree",
                "Compressing XML",
                "Converting XML to JSON"
            ],
            correct: 1,
            explanation: "The DOM is used for querying and manipulating XML documents as a hierarchical tree structure."
        },
        {
            id: 13,
            question: "What type of structure does the DOM represent an XML document as?",
            options: [
                "Graph",
                "Tree",
                "Array",
                "Matrix"
            ],
            correct: 1,
            explanation: "The DOM represents an XML document as a tree structure with nodes and hierarchical relationships."
        },
        {
            id: 14,
            question: "Which interface is used for storing and accessing multiple attributes?",
            options: [
                "NodeList",
                "NamedNodeMap",
                "DocumentType",
                "ElementList"
            ],
            correct: 1,
            explanation: "NamedNodeMap is the interface used for storing and accessing multiple attributes of an element."
        },
        {
            id: 15,
            question: "What does nodeName return?",
            options: [
                "Node type number",
                "The tag name or attribute name",
                "The text content of the node",
                "The parent node's name"
            ],
            correct: 1,
            explanation: "nodeName returns the tag name for element nodes or the attribute name for attribute nodes."
        },
        {
            id: 16,
            question: "Which method retrieves multiple elements by tag name?",
            options: [
                "getElementById()",
                "getElementsByTagName()",
                "getTagList()",
                "findByTag()"
            ],
            correct: 1,
            explanation: "getElementsByTagName() retrieves all elements with a specific tag name and returns a NodeList."
        },
        {
            id: 17,
            question: "In a NodeList, the index starts at:",
            options: [
                "1",
                "0",
                "-1",
                "Depends on the parser"
            ],
            correct: 1,
            explanation: "NodeList indexing starts at 0, like most programming language arrays."
        },
        {
            id: 18,
            question: "Which DOM object represents the entire XML document?",
            options: [
                "NodeList",
                "Document",
                "Element",
                "RootNode"
            ],
            correct: 1,
            explanation: "The Document object represents the entire XML document and serves as the root of the DOM tree."
        },
        {
            id: 19,
            question: "What does the textContent property return?",
            options: [
                "Only direct child text",
                "Aggregated text of all descendants",
                "Attribute values only",
                "CDATA sections only"
            ],
            correct: 1,
            explanation: "textContent returns the aggregated text content of all descendant nodes."
        },
        {
            id: 20,
            question: "Which DOM interface is used to represent a single XML element?",
            options: [
                "Document",
                "Node",
                "Element",
                "NamedNodeMap"
            ],
            correct: 2,
            explanation: "The Element interface represents a single XML element in the DOM tree."
        },
        {
            id: 21,
            question: "hasChildNodes() returns:",
            options: [
                "Number of children",
                "Boolean value",
                "List of children",
                "First child node"
            ],
            correct: 1,
            explanation: "hasChildNodes() returns a boolean value indicating whether the node has any child nodes."
        },
        {
            id: 22,
            question: "Which is NOT a valid DOM Node type?",
            options: [
                "Element",
                "Attribute",
                "Matrix",
                "Text"
            ],
            correct: 2,
            explanation: "Matrix is not a valid DOM Node type. Common types include Element, Attribute, Text, Document, etc."
        },
        {
            id: 23,
            question: "What does item(n) in a NodeList return if n is out of range?",
            options: [
                "The last node",
                "Null",
                "Empty string",
                "First node"
            ],
            correct: 1,
            explanation: "If the index n is out of range, item(n) returns null."
        },
        {
            id: 24,
            question: "Which DOM method removes an attribute by name?",
            options: [
                "removeNode()",
                "removeItem()",
                "removeNamedItem()",
                "deleteAttr()"
            ],
            correct: 2,
            explanation: "removeNamedItem() is the method used to remove an attribute by name from a NamedNodeMap."
        },
        {
            id: 25,
            question: "Which of the following statements about Element nodes is TRUE?",
            options: [
                "They cannot have attributes",
                "They are the only node type that can have attributes",
                "They always contain text only",
                "They cannot have child nodes"
            ],
            correct: 1,
            explanation: "Element nodes are the only node type that can have attributes in the DOM."
        },
        {
            id: 26,
            question: "The DOM can only be used for XML, not HTML.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "The DOM can be used for both XML and HTML documents. It's a platform- and language-neutral interface."
        },
        {
            id: 27,
            question: "NamedNodeMap is used to store attributes as key-value pairs.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "NamedNodeMap is used to store attributes as key-value pairs, providing access to element attributes."
        },
        {
            id: 28,
            question: "NodeList is always \"live\" in all DOM implementations.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "NodeList is not always live in all DOM implementations. Some implementations return static NodeLists."
        },
        {
            id: 29,
            question: "The parentNode property of the root element is null.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "The parentNode property of the root element is null since it has no parent."
        },
        {
            id: 30,
            question: "The nodeValue of an element node contains its text content.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "The nodeValue of an element node is null. Text content is contained in child text nodes."
        },
        {
            id: 31,
            question: "The textContent property includes text from all descendant nodes.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "The textContent property includes text from all descendant nodes, concatenated together."
        },
        {
            id: 32,
            question: "getElementsByTagName() returns a NodeList.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "getElementsByTagName() returns a NodeList containing all elements with the specified tag name."
        },
        {
            id: 33,
            question: "The DOM tree structure always starts with a Document node.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "The DOM tree structure always starts with a Document node as the root of the entire document."
        },
        {
            id: 34,
            question: "An Element node can have both attributes and child nodes.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "An Element node can have both attributes (stored in NamedNodeMap) and child nodes."
        },
        {
            id: 35,
            question: "Removing an attribute from an element requires removing the entire element.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "Removing an attribute does not require removing the entire element. Attributes can be removed individually."
        }
    ],
    namespaces: [

        {
            id: 7,
            question: "Why might XML namespaces be considered cumbersome?",
            options: [
                "They are deprecated",
                "They add verbosity and require additional syntax and declarations",
                "They are incompatible with JSON",
                "They require DTDs"
            ],
            correct: 1,
            explanation: "Namespaces add verbosity and require additional syntax and declarations, making XML documents more complex."
        },
        {
            id: 8,
            question: "What character is used to separate a namespace prefix from a tag name?",
            options: [
                "/",
                "#",
                ":",
                "@"
            ],
            correct: 2,
            explanation: "The colon (:) character is used to separate a namespace prefix from a tag name, as in 'prefix:element'."
        },
        {
            id: 9,
            question: "Is a namespace the same as its prefix?",
            options: [
                "No, the prefix is a shorthand for the actual namespace URI",
                "Yes, they are interchangeable",
                "Only in XML 1.1",
                "Only when validating"
            ],
            correct: 0,
            explanation: "No, the prefix is just a shorthand alias for the actual namespace URI. The prefix can be changed without affecting the namespace."
        },
        {
            id: 10,
            question: "Why do namespaces often look like URLs?",
            options: [
                "They must be resolvable web addresses",
                "To ensure global uniqueness, not because they must point to a website",
                "For browser compatibility",
                "Because they are URNs"
            ],
            correct: 1,
            explanation: "Namespaces use URI format to ensure global uniqueness, but they don't need to point to actual websites."
        },
        {
            id: 11,
            question: "How is a namespace declared?",
            options: [
                "Using namespace-declare",
                "Using the xmlns attribute in a start tag",
                "In a DTD",
                "With an XML comment"
            ],
            correct: 1,
            explanation: "Namespaces are declared using the xmlns attribute in a start tag."
        },
        {
            id: 12,
            question: "What is the syntax for declaring a namespace with a prefix?",
            options: [
                "xmlns=\"prefix:namespace\"",
                "xmlns:prefix=\"namespaceURI\"",
                "namespace:prefix=\"URI\"",
                "xmlns.prefix=\"URI\""
            ],
            correct: 1,
            explanation: "The correct syntax is xmlns:prefix=\"namespaceURI\" where prefix is the alias and namespaceURI is the actual namespace."
        },
        {
            id: 13,
            question: "Can a default namespace be declared without a prefix?",
            options: [
                "No",
                "Yes, using xmlns=\"namespaceURI\"",
                "Only in attributes",
                "Only for the root"
            ],
            correct: 1,
            explanation: "Yes, a default namespace can be declared using xmlns=\"namespaceURI\" without a prefix."
        },
        {
            id: 14,
            question: "Can more than one default namespace be used in the same element tag?",
            options: [
                "No, only one default namespace is allowed per element tag",
                "Yes, if separated by commas",
                "Yes, but only in XML 1.1",
                "Only if declared globally"
            ],
            correct: 0,
            explanation: "No, only one default namespace is allowed per element tag."
        },
        {
            id: 15,
            question: "What happens to unqualified attributes in a default namespace?",
            options: [
                "They inherit the default namespace",
                "They do not inherit the default namespace",
                "They are ignored",
                "They become invalid"
            ],
            correct: 1,
            explanation: "Unqualified attributes do not inherit the default namespace - they remain in no namespace."
        },
        {
            id: 16,
            question: "Can different elements inside the same document use different default namespaces?",
            options: [
                "Yes, if a new default namespace is declared in a nested element",
                "No",
                "Only once per document",
                "Only in the header"
            ],
            correct: 0,
            explanation: "Yes, different elements can use different default namespaces if a new default namespace is declared in a nested element."
        },
        {
            id: 17,
            question: "Is the prefix required when using a default namespace?",
            options: [
                "No, elements without prefixes will belong to the default namespace",
                "Yes, always",
                "Only in attributes",
                "Only in XML 1.1"
            ],
            correct: 0,
            explanation: "No, elements without prefixes will belong to the default namespace."
        },
        {
            id: 18,
            question: "Can an element have both a default namespace and prefixed namespaces?",
            options: [
                "Yes, but only one default and any number of prefixed namespaces",
                "No",
                "Only if they point to the same URI",
                "Only in the root"
            ],
            correct: 0,
            explanation: "Yes, an element can have both a default namespace and any number of prefixed namespaces."
        },
        {
            id: 19,
            question: "What is the default namespace for the root <government> element?",
            code: `<government xmlns="http://www.usa.gov" xmlns:ca="http://www.gc.ca/gov">
  <senate>
    <organization xmlns="http://www.london.ca/gov">
      <council>
        <ca:member>Jane Doe</ca:member>
      </council>
    </organization>
  </senate>
  <assembly xmlns="http://www.ontario.ca/gov"/>
</government>`,
            options: [
                "http://www.gc.ca/gov",
                "http://www.london.ca/gov",
                "http://www.usa.gov",
                "http://www.ontario.ca/gov"
            ],
            correct: 2,
            explanation: "The root <government> element has xmlns=\"http://www.usa.gov\" as its default namespace."
        },
        {
            id: 20,
            question: "Which element has its own default namespace?",
            code: `<government xmlns="http://www.usa.gov" xmlns:ca="http://www.gc.ca/gov">
  <senate>
    <organization xmlns="http://www.london.ca/gov">
      <council>
        <ca:member>Jane Doe</ca:member>
      </council>
    </organization>
  </senate>
  <assembly xmlns="http://www.ontario.ca/gov"/>
</government>`,
            options: [
                "<government>",
                "<organization>",
                "<senate>",
                "<council>"
            ],
            correct: 1,
            explanation: "The <organization> element has its own default namespace declaration xmlns=\"http://www.london.ca/gov\"."
        },
        {
            id: 21,
            question: "What is the prefix used for the namespace http://www.gc.ca/gov?",
            code: `<government xmlns="http://www.usa.gov" xmlns:ca="http://www.gc.ca/gov">
  <senate>
    <organization xmlns="http://www.london.ca/gov">
      <council>
        <ca:member>Jane Doe</ca:member>
      </council>
    </organization>
  </senate>
  <assembly xmlns="http://www.ontario.ca/gov"/>
</government>`,
            options: [
                "ns",
                "gov",
                "ca",
                "gc"
            ],
            correct: 2,
            explanation: "The prefix 'ca' is used for the namespace http://www.gc.ca/gov."
        },
        {
            id: 22,
            question: "What namespace does <assembly> belong to?",
            code: `<government xmlns="http://www.usa.gov" xmlns:ca="http://www.gc.ca/gov">
  <senate>
    <organization xmlns="http://www.london.ca/gov">
      <council>
        <ca:member>Jane Doe</ca:member>
      </council>
    </organization>
  </senate>
  <assembly xmlns="http://www.ontario.ca/gov"/>
</government>`,
            options: [
                "http://www.ontario.ca/gov",
                "http://www.gc.ca/gov",
                "http://www.usa.gov",
                "http://www.london.ca/gov"
            ],
            correct: 0,
            explanation: "The <assembly> element has its own default namespace xmlns=\"http://www.ontario.ca/gov\"."
        },
        {
            id: 23,
            question: "What namespace does <senate> belong to?",
            code: `<government xmlns="http://www.usa.gov" xmlns:ca="http://www.gc.ca/gov">
  <senate>
    <organization xmlns="http://www.london.ca/gov">
      <council>
        <ca:member>Jane Doe</ca:member>
      </council>
    </organization>
  </senate>
  <assembly xmlns="http://www.ontario.ca/gov"/>
</government>`,
            options: [
                "http://www.gc.ca/gov",
                "http://www.usa.gov",
                "http://www.london.ca/gov",
                "None"
            ],
            correct: 1,
            explanation: "The <senate> element inherits the default namespace from its parent <government> element."
        },
        {
            id: 24,
            question: "What namespace does <council> belong to?",
            code: `<government xmlns="http://www.usa.gov" xmlns:ca="http://www.gc.ca/gov">
  <senate>
    <organization xmlns="http://www.london.ca/gov">
      <council>
        <ca:member>Jane Doe</ca:member>
      </council>
    </organization>
  </senate>
  <assembly xmlns="http://www.ontario.ca/gov"/>
</government>`,
            options: [
                "http://www.gc.ca/gov",
                "http://www.usa.gov",
                "http://www.london.ca/gov",
                "None"
            ],
            correct: 2,
            explanation: "The <council> element inherits the default namespace from its parent <organization> element."
        },
        {
            id: 25,
            question: "What namespace does <ca:member> belong to?",
            code: `<government xmlns="http://www.usa.gov" xmlns:ca="http://www.gc.ca/gov">
  <senate>
    <organization xmlns="http://www.london.ca/gov">
      <council>
        <ca:member>Jane Doe</ca:member>
      </council>
    </organization>
  </senate>
  <assembly xmlns="http://www.ontario.ca/gov"/>
</government>`,
            options: [
                "http://www.gc.ca/gov",
                "http://www.ontario.ca/gov",
                "http://www.usa.gov",
                "http://www.london.ca/gov"
            ],
            correct: 0,
            explanation: "The <ca:member> element uses the 'ca' prefix which is bound to http://www.gc.ca/gov."
        },
        {
            id: 26,
            question: "What namespace does <organization> belong to?",
            code: `<government xmlns="http://www.usa.gov" xmlns:ca="http://www.gc.ca/gov">
  <senate>
    <organization xmlns="http://www.london.ca/gov">
      <council>
        <ca:member>Jane Doe</ca:member>
      </council>
    </organization>
  </senate>
  <assembly xmlns="http://www.ontario.ca/gov"/>
</government>`,
            options: [
                "http://www.london.ca/gov",
                "http://www.usa.gov",
                "http://www.gc.ca/gov",
                "None"
            ],
            correct: 0,
            explanation: "The <organization> element has its own default namespace xmlns=\"http://www.london.ca/gov\"."
        },
        {
            id: 27,
            question: "What namespace does the root <government> element belong to?",
            code: `<government xmlns="http://www.usa.gov" xmlns:ca="http://www.gc.ca/gov">
  <senate>
    <organization xmlns="http://www.london.ca/gov">
      <council>
        <ca:member>Jane Doe</ca:member>
      </council>
    </organization>
  </senate>
  <assembly xmlns="http://www.ontario.ca/gov"/>
</government>`,
            options: [
                "http://www.usa.gov",
                "http://www.gc.ca/gov",
                "http://www.london.ca/gov",
                "http://www.ontario.ca/gov"
            ],
            correct: 0,
            explanation: "The root <government> element has xmlns=\"http://www.usa.gov\" as its default namespace."
        },
        {
            id: 28,
            question: "Is <tm:name> valid if no namespace tm is declared?",
            options: [
                "No, it's illegal without a namespace declaration",
                "Yes, it's optional",
                "Only if validated",
                "Only in attributes"
            ],
            correct: 0,
            explanation: "No, using a prefixed element without declaring the namespace is illegal in XML."
        },
        {
            id: 29,
            question: "Can a namespace prefix be changed without altering the namespace URI?",
            options: [
                "Yes, prefixes are just aliases for the namespace URI",
                "No",
                "Only in schema files",
                "Only for default namespaces"
            ],
            correct: 0,
            explanation: "Yes, prefixes are just aliases for the namespace URI and can be changed without affecting the namespace."
        },
        {
            id: 30,
            question: "What happens if two elements use the same name but different namespaces?",
            options: [
                "They are treated as distinct elements",
                "One overrides the other",
                "They must be merged",
                "The second one is ignored"
            ],
            correct: 0,
            explanation: "They are treated as distinct elements because they belong to different namespaces."
        },
        {
            id: 31,
            question: "What is the role of namespaces in merging XML documents from different sources?",
            options: [
                "They compress the document",
                "They simplify structure",
                "They prevent naming collisions by qualifying element names with unique namespaces",
                "They help with DTD validation"
            ],
            correct: 2,
            explanation: "Namespaces prevent naming collisions by qualifying element names with unique namespaces when merging documents."
        },
        {
            id: 32,
            question: "Are attributes affected by the default namespace declaration?",
            options: [
                "Yes, by default",
                "No, they must be explicitly prefixed to belong to a namespace",
                "Only in the root",
                "Only when validated"
            ],
            correct: 1,
            explanation: "No, attributes are not affected by the default namespace declaration - they must be explicitly prefixed."
        },
        {
            id: 33,
            question: "Can a namespaced element contain child elements from a different namespace?",
            options: [
                "No",
                "Yes, if those child elements declare or use a different namespace",
                "Only if inherited",
                "Only one namespace per tree"
            ],
            correct: 1,
            explanation: "Yes, a namespaced element can contain child elements from different namespaces if those elements declare or use different namespaces."
        }
    ],
    xpath: [
        {
            id: 11,
            question: "What does adding a predicate to an XPath expression do?",
            options: [
                "It could increase the number of nodes returned",
                "It could change the order (in the node set)",
                "It could change the type of nodes",
                "It could decrease the number of nodes returned"
            ],
            correct: 3,
            explanation: "Adding a predicate to an XPath expression filters the node set, typically decreasing the number of nodes returned."
        },
        {
            id: 12,
            question: "Which XPath expression returns only singer elements that contain at least one child element called song?",
            options: [
                "//singer[song = \"true\"]",
                "//singer[@song = \"true\"]",
                "//singer[song]",
                "//singer/song"
            ],
            correct: 2,
            explanation: "//singer[song] uses a predicate to select only singer elements that have at least one song child element."
        },
        {
            id: 13,
            question: "Which XPath expression returns any song with @genre=\"hip-hop\" and @length < 3?",
            options: [
                "//song[@genre=\"hip-hop\" | @length<3]",
                "//song[@genre=\"hip-hop\" and @length<3]",
                "//song[@genre=\"hip-hop\" + @length<3]",
                "//song[@genre=\"hip-hop\" or @length<3]"
            ],
            correct: 1,
            explanation: "//song[@genre=\"hip-hop\" and @length<3] uses the 'and' operator to combine two conditions in the predicate."
        },
        {
            id: 14,
            question: "True or False: An XPath predicate is required in every XPath expression.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "False. XPath predicates are optional and are used to filter node sets, but they are not required in every expression."
        },
        {
            id: 15,
            question: "Which XPath predicate returns the third song element in the node set?",
            options: [
                "//song[\"3\"]",
                "//song[@position=2]",
                "//song[2]",
                "//song[3]"
            ],
            correct: 3,
            explanation: "//song[3] uses a numeric predicate to select the third song element in the node set (1-indexed)."
        },
        {
            id: 16,
            question: "What XPath expression selects all child nodes of the <book> element?",
            options: [
                "book/*",
                "//book/*",
                "/books/book/*",
                "/book/*"
            ],
            correct: 2,
            explanation: "/books/book/* selects all child elements of book elements that are children of the root books element."
        },
 
        {
            id: 18,
            question: "Which XPath expression retrieves the value of the id attribute of all <book> elements?",
            options: [
                "book.id",
                "/books/book.id",
                "/books/book/@id",
                "//@id"
            ],
            correct: 2,
            explanation: "/books/book/@id selects the id attribute of all book elements that are children of the root books element."
        },
        {
            id: 19,
            question: "Which expression returns all <author> elements that are children of <authors> elements?",
            options: [
                "//authors//author",
                "/authors/author",
                "//authors/author",
                "authors/author"
            ],
            correct: 2,
            explanation: "//authors/author finds all authors elements anywhere in the document, then selects their direct author children."
        },
        {
            id: 20,
            question: "Which XPath expression selects all <book> elements with an id attribute of 123?",
            options: [
                "/books/book/@id=123",
                "/books/book[@id=\"123\"]",
                "/books/book/id=\"123\"",
                "//book[id=\"123\"]"
            ],
            correct: 1,
            explanation: "/books/book[@id=\"123\"] uses a predicate to filter book elements that have an id attribute with value \"123\"."
        },
        {
            id: 21,
            question: "Which one of the following methods in .NET can NOT be used to execute an XPath expression?",
            options: [
                "An XPathNavigator object's Evaluate() method",
                "An XmlDocument object's Load() method",
                "An XmlDocument object's SelectNodes() method",
                "An XPathNavigator object's Select() method"
            ],
            correct: 1,
            explanation: "An XmlDocument object's Load() method is used to load XML data into the DOM, not to execute XPath expressions."
        },
        {
            id: 22,
            question: "What is the purpose of an XPathNavigator object's Select() method?",
            options: [
                "To determine which XML document will be referenced by any future XPath expressions",
                "To execute an XPath expression that returns a node set",
                "To execute an XPath expression that returns an aggregate result",
                "To load some XML data into the DOM"
            ],
            correct: 1,
            explanation: "The Select() method executes an XPath expression and returns an XPathNodeIterator containing the matching nodes."
        },
        {
            id: 23,
            question: "What is the purpose of an XPathNavigator object's Evaluate() method?",
            options: [
                "To test an XPath expression for correct syntax",
                "To execute an XPath expression that returns an aggregate result",
                "To test some XML data for well-formedness",
                "To execute an XPath expression that returns a node set"
            ],
            correct: 1,
            explanation: "The Evaluate() method executes an XPath expression and returns an aggregate result (like count, sum, etc.) rather than a node set."
        },
        {
            id: 24,
            question: "Which loop demonstrates a correct way to process all the nodes returned via an XPathNodeIterator interface called nodeIterator?",
            options: [
                "while(nodeIterator.MoveNext()) { // process current node }",
                "do { // process current node } while(nodeIterator.MoveNext());",
                "while(true) { // process current node nodeIterator.MoveNext(); }",
                "foreach(XmlNode node in nodeIterator) { // process current node }"
            ],
            correct: 0,
            explanation: "The correct pattern is to use MoveNext() in a while loop to iterate through all nodes in the XPathNodeIterator."
        },
        {
            id: 25,
            question: "Which method in .NET can be used to execute an XPath expression that returns an XPathNodeIterator interface?",
            options: [
                "An XPathNavigator object's Evaluate() method",
                "An XmlDocument object's Load() method",
                "An XmlDocument object's SelectNodes() method",
                "An XPathNavigator object's Select() method"
            ],
            correct: 3,
            explanation: "An XPathNavigator object's Select() method executes an XPath expression and returns an XPathNodeIterator interface."
        }
    ],
    xml: [
        {
            id: 1,
            question: "What does XML stand for?",
            options: [
                "Extended Markup Language",
                "Extensible Markup Language",
                "Example Markup Language",
                "External Markup Language"
            ],
            correct: 1,
            explanation: "XML stands for Extensible Markup Language, emphasizing its ability to be extended with custom tags."
        },
        {
            id: 2,
            question: "What is the main purpose of XML?",
            options: [
                "Styling web pages",
                "Representing and sharing structured data",
                "Storing images",
                "Compressing text"
            ],
            correct: 1,
            explanation: "XML's main purpose is to represent and share structured data in a format that is both human-readable and machine-readable."
        },
        {
            id: 3,
            question: "Which of the following is NOT an XML feature?",
            options: [
                "Extensible",
                "Platform-independent",
                "Uses predefined tags only",
                "Human-readable"
            ],
            correct: 2,
            explanation: "XML is extensible, meaning you can create your own tags. It does not use predefined tags only - that's a feature of HTML."
        },
        {
            id: 4,
            question: "Which of these is an example of a technology similar to XML?",
            options: [
                "JSON",
                "CSS",
                "HTML",
                "JPEG"
            ],
            correct: 0,
            explanation: "JSON (JavaScript Object Notation) is a data format similar to XML, used for data interchange."
        },
        {
            id: 5,
            question: "Which XML version introduced more flexibility in identifiers?",
            options: [
                "XML 1.0",
                "XML 1.1",
                "XML 2.0",
                "XML 3.0"
            ],
            correct: 1,
            explanation: "XML 1.1 introduced more flexibility in identifiers, allowing additional Unicode characters."
        },
        {
            id: 6,
            question: "In XML, element names:",
            options: [
                "Are case-insensitive",
                "Can contain spaces",
                "Are case-sensitive",
                "Can start with \"xml\" in any case"
            ],
            correct: 2,
            explanation: "XML element names are case-sensitive, meaning <Book> and <book> are different elements."
        },
        {
            id: 7,
            question: "Which is NOT a valid XML use case?",
            options: [
                "Remote procedure calls",
                "Database serialization",
                "Document representation",
                "Image rendering"
            ],
            correct: 3,
            explanation: "XML is not designed for image rendering. It's used for data representation, not visual rendering."
        },
        {
            id: 8,
            question: "What is a requirement for a well-formed XML document?",
            options: [
                "All attribute values must be numeric",
                "Must have exactly one root element",
                "Must include comments",
                "Tags can overlap"
            ],
            correct: 1,
            explanation: "A well-formed XML document must have exactly one root element that contains all other elements."
        },
        {
            id: 9,
            question: "Which of the following can XML NOT directly represent?",
            options: [
                "Nested data structures",
                "Binary image data without encoding",
                "Attributes for elements",
                "Hierarchical data"
            ],
            correct: 1,
            explanation: "XML cannot directly represent binary data without encoding it as text (e.g., base64)."
        },
        {
            id: 10,
            question: "Which of the following is true about XML attributes?",
            options: [
                "Attributes must always be numeric",
                "Attributes can appear multiple times with the same name in an element",
                "Attributes must be quoted",
                "Attributes cannot contain text"
            ],
            correct: 2,
            explanation: "XML attributes must be quoted, either with single or double quotes."
        },
        {
            id: 11,
            question: "Which of these statements about XML and HTML is correct?",
            options: [
                "XML focuses on appearance, HTML focuses on data content",
                "HTML focuses on appearance, XML focuses on data content",
                "Both have predefined tag sets",
                "XML is case-insensitive, HTML is case-sensitive"
            ],
            correct: 1,
            explanation: "HTML focuses on appearance and presentation, while XML focuses on data content and structure."
        },
        {
            id: 12,
            question: "Which example shows valid XML nesting?",
            options: [
                "<a><b></a></b>",
                "<a><b></b></a>",
                "<a></a><a></a> as root",
                "<a><b></c></a>"
            ],
            correct: 1,
            explanation: "Valid XML nesting requires proper opening and closing of tags in the correct order."
        },
        {
            id: 13,
            question: "Which XML feature allows it to work across platforms?",
            options: [
                "Binary encoding",
                "Unicode text format",
                "Embedded scripts",
                "Proprietary tags"
            ],
            correct: 1,
            explanation: "XML uses Unicode text format, making it platform-independent and universally readable."
        },
        {
            id: 14,
            question: "Which XML declaration is correct?",
            options: [
                "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
                "<xml version=\"1.0\" encoding=\"UTF-8\">",
                "<xml-declaration 1.0 UTF-8>",
                "<?xml encoding=\"UTF-8\"?>"
            ],
            correct: 0,
            explanation: "The correct XML declaration syntax is <?xml version=\"1.0\" encoding=\"UTF-8\"?>."
        },
        {
            id: 15,
            question: "What is the role of CDATA in XML?",
            options: [
                "Stores binary data",
                "Allows text with reserved XML characters without parsing",
                "Marks comments in XML",
                "Specifies namespaces"
            ],
            correct: 1,
            explanation: "CDATA sections allow text containing reserved XML characters to be included without being parsed as XML markup."
        },
        {
            id: 16,
            question: "XML is case-insensitive.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "XML is case-sensitive. Element names like <Book> and <book> are treated as different elements."
        },
        {
            id: 17,
            question: "An XML document can have multiple root elements.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "An XML document must have exactly one root element. Multiple root elements are not allowed."
        },
        {
            id: 18,
            question: "Attributes in XML must be enclosed in quotes.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "XML attributes must be enclosed in quotes, either single or double quotes."
        },
        {
            id: 19,
            question: "XML was designed to replace HTML entirely.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "XML was not designed to replace HTML. They serve different purposes - HTML for presentation, XML for data."
        },
        {
            id: 20,
            question: "XML can be used to serialize data for transfer over a network.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "XML is commonly used to serialize and transfer data over networks due to its text-based format."
        },
        {
            id: 21,
            question: "Every XML document must have a declaration at the top.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "XML declarations are optional. While recommended, they are not required for a well-formed XML document."
        },
        {
            id: 22,
            question: "XML preserves whitespace by default.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "XML preserves whitespace by default, unlike HTML which collapses multiple spaces."
        },
        {
            id: 23,
            question: "XML element names cannot start with \"xml\" in any case.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "XML element names cannot start with \"xml\" (in any case) as these are reserved for XML specifications."
        },
        {
            id: 24,
            question: "XML comments start with <!-- and end with -->.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "XML comments use the syntax <!-- comment -->, similar to HTML comments."
        },
        {
            id: 25,
            question: "An XML file can store data in binary format without encoding.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "XML is text-based and cannot directly store binary data without encoding it as text (e.g., base64)."
        }
    ],
    xsd: [
        {
            id: 1,
            question: "What does XSD stand for?",
            options: [
                "XML Schema Definition",
                "XML Style Description",
                "Extended Schema Document",
                "XML Structure Data"
            ],
            correct: 0,
            explanation: "XSD stands for XML Schema Definition, which is the W3C standard for defining XML document structure."
        },
        {
            id: 2,
            question: "The main purpose of an XSD is to:",
            options: [
                "Transform XML documents",
                "Validate XML structure and content",
                "Style XML documents",
                "Query XML data"
            ],
            correct: 1,
            explanation: "The main purpose of an XSD is to validate XML structure and content, ensuring documents conform to the defined schema."
        },
        {
            id: 3,
            question: "What is an \"instance\" document?",
            options: [
                "A schema file",
                "An XML document validated against a schema",
                "An XML example without a schema",
                "A document containing multiple schemas"
            ],
            correct: 1,
            explanation: "An instance document is an XML document that is validated against a schema to ensure it conforms to the defined structure."
        },
        {
            id: 4,
            question: "Which attribute is used to associate a schema without a namespace?",
            options: [
                "schemaLocation",
                "noNamespaceSchemaLocation",
                "schemaRef",
                "noNamespace"
            ],
            correct: 1,
            explanation: "noNamespaceSchemaLocation is used to associate a schema with an XML document that doesn't use namespaces."
        },
        {
            id: 5,
            question: "Which of these is NOT a primary schema component?",
            options: [
                "Element declarations",
                "Simple Type definitions",
                "Attribute declarations",
                "Style rules"
            ],
            correct: 3,
            explanation: "Style rules are not a primary schema component. XSD focuses on structure validation, not styling."
        },
        {
            id: 6,
            question: "In <xsd:element name=\"age\" type=\"xsd:int\" minOccurs=\"0\" maxOccurs=\"1\"/>, what does minOccurs=\"0\" mean?",
            options: [
                "Element is optional",
                "Element must occur at least once",
                "Element can occur unlimited times",
                "Element is required"
            ],
            correct: 0,
            explanation: "minOccurs=\"0\" means the element is optional and may or may not appear in the XML document."
        },
        {
            id: 7,
            question: "Which is a built-in primitive XSD type?",
            options: [
                "positiveInteger",
                "string",
                "NMTOKEN",
                "unsignedLong"
            ],
            correct: 1,
            explanation: "string is a built-in primitive XSD type. The others are derived types."
        },
        {
            id: 8,
            question: "Which facet restricts a string to a certain number of characters?",
            options: [
                "length",
                "pattern",
                "enumeration",
                "maxExclusive"
            ],
            correct: 0,
            explanation: "The length facet restricts a string to a specific number of characters."
        },
        {
            id: 9,
            question: "Which facet uses regular expressions for constraints?",
            options: [
                "pattern",
                "enumeration",
                "length",
                "whitespace"
            ],
            correct: 0,
            explanation: "The pattern facet uses regular expressions to define constraints on values."
        },
        {
            id: 10,
            question: "What does the enumeration facet do?",
            options: [
                "Limits value to a set of allowed values",
                "Limits length of value",
                "Converts values to integers",
                "Removes whitespace"
            ],
            correct: 0,
            explanation: "The enumeration facet limits a value to a specific set of allowed values."
        },
        {
            id: 11,
            question: "Which is an example of a user-defined simple type?",
            options: [
                "xsd:int",
                "<xsd:simpleType name=\"MyType\">",
                "positiveInteger",
                "xsd:decimal"
            ],
            correct: 1,
            explanation: "<xsd:simpleType name=\"MyType\"> is the syntax for defining a user-defined simple type in XSD."
        },
        {
            id: 12,
            question: "In XSD, what is a complex type used for?",
            options: [
                "Only storing text",
                "Defining elements with child elements and/or attributes",
                "Restricting values of a type",
                "Creating enumerations"
            ],
            correct: 1,
            explanation: "Complex types are used to define elements that can have child elements and/or attributes."
        },
        {
            id: 13,
            question: "Which facet sets both lower and upper bounds inclusive?",
            options: [
                "minExclusive/maxExclusive",
                "minInclusive/maxInclusive",
                "minLength/maxLength",
                "pattern"
            ],
            correct: 1,
            explanation: "minInclusive/maxInclusive sets both lower and upper bounds as inclusive (including the boundary values)."
        },
        {
            id: 14,
            question: "Which is NOT a whitespace facet value?",
            options: [
                "preserve",
                "replace",
                "collapse",
                "trim"
            ],
            correct: 3,
            explanation: "trim is not a valid whitespace facet value. The valid values are preserve, replace, and collapse."
        },
        {
            id: 15,
            question: "What is the base type of positiveInteger?",
            options: [
                "integer",
                "decimal",
                "nonNegativeInteger",
                "number"
            ],
            correct: 2,
            explanation: "positiveInteger is derived from nonNegativeInteger, which is the base type."
        },
        {
            id: 16,
            question: "Which facet applies only to decimal datatypes?",
            options: [
                "precision",
                "pattern",
                "enumeration",
                "minLength"
            ],
            correct: 0,
            explanation: "The precision facet applies only to decimal datatypes to control the number of decimal places."
        },
        {
            id: 17,
            question: "In the telephone number example, why are length and pattern facets combined with AND?",
            options: [
                "They restrict the same property",
                "All facets except pattern/enumeration are combined with AND",
                "Pattern overrides length",
                "XSD requires AND for all constraints"
            ],
            correct: 1,
            explanation: "All facets except pattern and enumeration are combined with AND logic in XSD."
        },
        {
            id: 18,
            question: "Which of these can be set to \"unbounded\"?",
            options: [
                "length facet",
                "maxOccurs attribute",
                "enumeration facet",
                "precision facet"
            ],
            correct: 1,
            explanation: "maxOccurs attribute can be set to \"unbounded\" to allow unlimited occurrences of an element."
        },
        {
            id: 19,
            question: "What is the default value of maxOccurs if not specified?",
            options: [
                "0",
                "1",
                "unbounded",
                "10"
            ],
            correct: 1,
            explanation: "The default value of maxOccurs is 1 if not specified."
        },
        {
            id: 20,
            question: "Which type of XSD datatype is indivisible?",
            options: [
                "Atomic",
                "List",
                "Complex",
                "Union"
            ],
            correct: 0,
            explanation: "Atomic datatypes are indivisible - they represent single values that cannot be broken down further."
        },
        {
            id: 21,
            question: "XSD is a W3C standard.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "XSD (XML Schema Definition) is indeed a W3C standard for defining XML document structure."
        },
        {
            id: 22,
            question: "An XML document can be valid without being well-formed.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "An XML document must be well-formed before it can be valid. Well-formedness is a prerequisite for validity."
        },
        {
            id: 23,
            question: "A schema can define both simple and complex types.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "A schema can define both simple types (for text-only elements) and complex types (for elements with children/attributes)."
        },
        {
            id: 24,
            question: "User-derived types must be based on primitive types only.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "User-derived types can be based on primitive types, derived types, or other user-defined types."
        },
        {
            id: 25,
            question: "The pattern facet uses SQL LIKE syntax.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "The pattern facet uses regular expression syntax, not SQL LIKE syntax."
        },
        {
            id: 26,
            question: "Enumeration facet values are case-sensitive.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "Enumeration facet values are case-sensitive - exact matches are required."
        },
        {
            id: 27,
            question: "The whitespace facet can be set to \"trim\".",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "trim is not a valid whitespace facet value. Valid values are preserve, replace, and collapse."
        },
        {
            id: 28,
            question: "A list type in XSD can contain spaces inside its values.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "A list type in XSD cannot contain spaces inside its individual values - spaces are used as separators."
        },
        {
            id: 29,
            question: "minInclusive allows the specified boundary value.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "minInclusive allows the specified boundary value to be included in the valid range."
        },
        {
            id: 30,
            question: "The precision facet applies to both decimal and string types.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "The precision facet applies only to decimal datatypes, not to string types."
        }
    ],
    xslt: [
        {
            id: 1,
            question: "What does XSLT stand for?",
            options: [
                "XML Style Language for Transformation",
                "XML Stylesheet Transformation Language",
                "Extensible Stylesheet Language Transformations",
                "Extended Stylesheet Transfer Language"
            ],
            correct: 2,
            explanation: "XSLT stands for Extensible Stylesheet Language Transformations, which is used to transform XML documents."
        },
        {
            id: 2,
            question: "Which organization maintains the XSLT standard?",
            options: [
                "ISO",
                "W3C",
                "IEEE",
                "OASIS"
            ],
            correct: 1,
            explanation: "The W3C (World Wide Web Consortium) maintains the XSLT standard."
        },
        {
            id: 3,
            question: "Which XSLT version was published in 2017?",
            options: [
                "1.0",
                "2.0",
                "3.0",
                "4.0"
            ],
            correct: 2,
            explanation: "XSLT 3.0 was published as a W3C Recommendation in 2017."
        },
        {
            id: 4,
            question: "The root element of an XSLT stylesheet is:",
            options: [
                "<stylesheet>",
                "<xsl:stylesheet>",
                "<xsl:template>",
                "<xsl:transform>"
            ],
            correct: 1,
            explanation: "<xsl:stylesheet> is the most common root element for XSLT stylesheets, though <xsl:transform> is also valid."
        },
        {
            id: 5,
            question: "What is the default output method for XSLT?",
            options: [
                "text",
                "html",
                "xml",
                "json"
            ],
            correct: 2,
            explanation: "The default output method for XSLT is xml."
        },
        {
            id: 6,
            question: "Which element defines transformation rules in XSLT?",
            options: [
                "<xsl:apply-templates>",
                "<xsl:template>",
                "<xsl:value-of>",
                "<xsl:stylesheet>"
            ],
            correct: 1,
            explanation: "<xsl:template> defines transformation rules in XSLT."
        },
        {
            id: 7,
            question: "The match attribute in <xsl:template> uses:",
            options: [
                "CSS selectors",
                "SQL queries",
                "XPath expressions",
                "Regular expressions"
            ],
            correct: 2,
            explanation: "The match attribute in <xsl:template> uses XPath expressions to select nodes."
        },
        {
            id: 8,
            question: "Which <xsl:template> attribute is used to call it from another template?",
            options: [
                "match",
                "mode",
                "name",
                "priority"
            ],
            correct: 2,
            explanation: "The name attribute is used to call a template from another template using <xsl:call-template>."
        },
        {
            id: 9,
            question: "If two templates match the same node, which one is chosen?",
            options: [
                "The first in the file",
                "The one with the higher priority value",
                "The one with the lower priority value",
                "Both are applied"
            ],
            correct: 1,
            explanation: "If two templates match the same node, the one with the higher priority value is chosen."
        },
        {
            id: 10,
            question: "Which attribute in <xsl:template> is used with <xsl:apply-templates> to process specific modes?",
            options: [
                "match",
                "mode",
                "name",
                "select"
            ],
            correct: 1,
            explanation: "The mode attribute is used with <xsl:apply-templates> to process specific modes."
        },
        {
            id: 11,
            question: "Which element is used to process a set of selected nodes within a template?",
            options: [
                "<xsl:for-each>",
                "<xsl:choose>",
                "<xsl:apply-templates>",
                "<xsl:call-template>"
            ],
            correct: 2,
            explanation: "<xsl:apply-templates> is used to process a set of selected nodes within a template."
        },
        {
            id: 12,
            question: "Which instruction outputs the value of a selected node?",
            options: [
                "<xsl:value-of>",
                "<xsl:output>",
                "<xsl:variable>",
                "<xsl:param>"
            ],
            correct: 0,
            explanation: "<xsl:value-of> outputs the value of a selected node."
        },
        {
            id: 13,
            question: "Which XSLT tag is used to perform conditional logic?",
            options: [
                "<xsl:if>",
                "<xsl:choose>",
                "<xsl:when>",
                "All of the above"
            ],
            correct: 3,
            explanation: "All of these XSLT tags are used to perform conditional logic: <xsl:if>, <xsl:choose>, and <xsl:when>."
        },
        {
            id: 14,
            question: "Which XSLT instruction allows shallow copying of nodes?",
            options: [
                "<xsl:copy>",
                "<xsl:copy-of>",
                "<xsl:duplicate>",
                "<xsl:clone>"
            ],
            correct: 0,
            explanation: "<xsl:copy> allows shallow copying of nodes (without children unless explicitly processed)."
        },
        {
            id: 15,
            question: "What is the difference between <xsl:copy> and <xsl:copy-of>?",
            options: [
                "copy duplicates text only; copy-of duplicates elements",
                "copy duplicates element structure without children; copy-of includes children",
                "copy includes all descendants; copy-of only attributes",
                "copy duplicates nothing"
            ],
            correct: 1,
            explanation: "<xsl:copy> duplicates element structure without children, while <xsl:copy-of> includes children."
        },
        {
            id: 16,
            question: "Which element is used for defining global constants in XSLT?",
            options: [
                "<xsl:const>",
                "<xsl:variable>",
                "<xsl:let>",
                "<xsl:param>"
            ],
            correct: 1,
            explanation: "<xsl:variable> is used for defining global constants in XSLT."
        },
        {
            id: 17,
            question: "Which statement about XSLT processing order is TRUE?",
            options: [
                "Templates are applied in document order",
                "The order in the file always matters",
                "All templates are applied, order determined by matches and priority",
                "Only the first template is applied"
            ],
            correct: 2,
            explanation: "All templates are applied, with the order determined by matches and priority."
        },
        {
            id: 18,
            question: "What happens if a node matches no template?",
            options: [
                "It's ignored completely",
                "Its children are still processed (implicit recursion)",
                "XSLT throws an error",
                "Output method changes to text"
            ],
            correct: 1,
            explanation: "If a node matches no template, its children are still processed through implicit recursion."
        },
        {
            id: 19,
            question: "What does <xsl:output method=\"html\"/> do?",
            options: [
                "Converts XML to HTML format in output",
                "Embeds HTML inside XML",
                "Converts HTML to XML",
                "Validates HTML"
            ],
            correct: 0,
            explanation: "<xsl:output method=\"html\"/> converts XML to HTML format in the output."
        },
        {
            id: 20,
            question: "In XSLT, which element is used to include another stylesheet?",
            options: [
                "<xsl:import>",
                "<xsl:include>",
                "<xsl:use>",
                "<xsl:link>"
            ],
            correct: 1,
            explanation: "<xsl:include> is used to include another stylesheet in XSLT."
        },
        {
            id: 21,
            question: "XSLT is only used for converting XML to HTML.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "XSLT can be used to transform XML to various formats including HTML, XML, text, and others."
        },
        {
            id: 22,
            question: "<xsl:template> can be both matched by pattern and called by name.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "A template can have both a match attribute (for pattern matching) and a name attribute (for calling by name)."
        },
        {
            id: 23,
            question: "<xsl:apply-templates> must always have a select attribute.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "<xsl:apply-templates> does not require a select attribute - it can process all children by default."
        },
        {
            id: 24,
            question: "The priority attribute in <xsl:template> can use negative numbers.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "The priority attribute in <xsl:template> can use negative numbers to give lower priority."
        },
        {
            id: 25,
            question: "<xsl:mode> is a valid element in XSLT 1.0.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "<xsl:mode> is not a valid element in XSLT 1.0. It's an attribute, not a standalone element."
        },
        {
            id: 26,
            question: "<xsl:choose> is similar to a switch-case structure in programming.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "<xsl:choose> is indeed similar to a switch-case structure in programming, with <xsl:when> and <xsl:otherwise>."
        },
        {
            id: 27,
            question: "<xsl:copy> includes attributes and children by default.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "<xsl:copy> copies attributes but not children by default, unless you explicitly apply templates."
        },
        {
            id: 28,
            question: "XSLT uses XPath for selecting nodes.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "XSLT uses XPath expressions for selecting nodes in the source document."
        },
        {
            id: 29,
            question: "<xsl:output> is mandatory in all stylesheets.",
            options: [
                "True",
                "False"
            ],
            correct: 1,
            explanation: "<xsl:output> is not mandatory in all stylesheets - it's optional and has default behavior."
        },
        {
            id: 30,
            question: "XSLT processing can be recursive.",
            options: [
                "True",
                "False"
            ],
            correct: 0,
            explanation: "XSLT processing can be recursive, with templates calling other templates or processing child nodes."
        }
    ]
};


const mixedQuestions = [
    ...quizData.dom,
    ...quizData.namespaces,
    ...quizData.xpath,
    ...quizData.xml,
    ...quizData.xsd,
    ...quizData.xslt
];


quizData.mixed = mixedQuestions;


if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
} 
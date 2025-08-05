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
            id: 17,
            question: "Which XPath expression would retrieve all <title> elements in the document, regardless of their position?",
            options: [
                "/books/title",
                "/title",
                "//title",
                "books//title"
            ],
            correct: 2,
            explanation: "//title uses the descendant-or-self axis to find all title elements anywhere in the document."
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
    ]
};

// Create mixed questions by combining all topics
const mixedQuestions = [
    ...quizData.dom,
    ...quizData.namespaces,
    ...quizData.xpath
];

// Add mixed questions to quizData
quizData.mixed = mixedQuestions;

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
} 
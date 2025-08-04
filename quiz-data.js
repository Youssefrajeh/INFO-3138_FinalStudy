const quizData = {
    dom: [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
            question: "What is the purpose of XML namespaces?",
            options: [
                "To shorten XML documents",
                "To define element types",
                "To distinguish between elements and attributes with the same name from different XML vocabularies",
                "To validate XML syntax"
            ],
            correct: 2,
            explanation: "XML namespaces are used to distinguish between elements and attributes with the same name from different XML vocabularies, preventing naming conflicts."
        },
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
            id: 12,
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
            id: 13,
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
            id: 14,
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
            id: 15,
            question: "Which XPath expression selects all <book> elements with an id attribute of 123?",
            options: [
                "/books/book/@id=123",
                "/books/book[@id=\"123\"]",
                "/books/book/id=\"123\"",
                "//book[id=\"123\"]"
            ],
            correct: 1,
            explanation: "/books/book[@id=\"123\"] uses a predicate to filter book elements that have an id attribute with value \"123\"."
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
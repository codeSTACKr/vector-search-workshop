"use strict";(self.webpackChunkvector_search_workshop=self.webpackChunkvector_search_workshop||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\ud83d\udcd8 Introduction","href":"/vector-search-workshop/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"MongoDB Atlas","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd8 What is MongoDB Atlas","href":"/vector-search-workshop/docs/mongodb-atlas/what-is-mongodb","docId":"mongodb-atlas/what-is-mongodb","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create your account","href":"/vector-search-workshop/docs/mongodb-atlas/create-account","docId":"mongodb-atlas/create-account","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create a cluster","href":"/vector-search-workshop/docs/mongodb-atlas/create-cluster","docId":"mongodb-atlas/create-cluster","unlisted":false}],"href":"/vector-search-workshop/docs/category/mongodb-atlas"},{"type":"category","label":"OpenAI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd8 What is OpenAI?","href":"/vector-search-workshop/docs/openai/what-is-openai","docId":"openai/what-is-openai","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create your account","href":"/vector-search-workshop/docs/openai/create-account","docId":"openai/create-account","unlisted":false}],"href":"/vector-search-workshop/docs/category/openai"},{"type":"category","label":"Application Setup","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd8 Documentation application","href":"/vector-search-workshop/docs/demo-app/intro","docId":"demo-app/intro","unlisted":false},{"type":"link","label":"\ud83d\udc50 Clone the application","href":"/vector-search-workshop/docs/demo-app/clone-app","docId":"demo-app/clone-app","unlisted":false},{"type":"link","label":"\ud83d\udc50 Configure the Application","href":"/vector-search-workshop/docs/demo-app/configure","docId":"demo-app/configure","unlisted":false},{"type":"link","label":"\ud83d\udc50 Test the app","href":"/vector-search-workshop/docs/demo-app/start-app","docId":"demo-app/start-app","unlisted":false}],"href":"/vector-search-workshop/docs/category/application-setup"},{"type":"category","label":"Full Text Search","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd8 Full Text Search","href":"/vector-search-workshop/docs/full-text-search/full-text-search","docId":"full-text-search/full-text-search","unlisted":false},{"type":"link","label":"\ud83d\udcd8 Why Search","href":"/vector-search-workshop/docs/full-text-search/why-search","docId":"full-text-search/why-search","unlisted":false},{"type":"link","label":"\ud83d\udcd8 Why Atlas Search","href":"/vector-search-workshop/docs/full-text-search/why-atlas-search","docId":"full-text-search/why-atlas-search","unlisted":false},{"type":"link","label":"\ud83d\udcd8 How Atlas Search Works","href":"/vector-search-workshop/docs/full-text-search/how-search-works","docId":"full-text-search/how-search-works","unlisted":false}],"href":"/vector-search-workshop/docs/category/full-text-search"},{"type":"category","label":"Vector Search","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd8 Semantic Search","href":"/vector-search-workshop/docs/vector-search/semantic-search","docId":"vector-search/semantic-search","unlisted":false},{"type":"link","label":"\ud83d\udcd8 What Are Vectors?","href":"/vector-search-workshop/docs/vector-search/what-are-vector","docId":"vector-search/what-are-vector","unlisted":false},{"type":"link","label":"\ud83d\udcd8 Implementing Vector Search","href":"/vector-search-workshop/docs/vector-search/implementing-vector-search","docId":"vector-search/implementing-vector-search","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create embeddings","href":"/vector-search-workshop/docs/vector-search/create-embeddings","docId":"vector-search/create-embeddings","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create Vector Search indexes","href":"/vector-search-workshop/docs/vector-search/create-index","docId":"vector-search/create-index","unlisted":false},{"type":"link","label":"\ud83d\udc50 Update API routes","href":"/vector-search-workshop/docs/vector-search/update-routes","docId":"vector-search/update-routes","unlisted":false}],"href":"/vector-search-workshop/docs/category/vector-search"},{"type":"link","label":"\ud83c\udfaf Summary","href":"/vector-search-workshop/docs/summary","docId":"summary","unlisted":false}]},"docs":{"demo-app/clone-app":{"id":"demo-app/clone-app","title":"\ud83d\udc50 Clone the application","description":"Go to the Github repository for the demo application.","sidebar":"tutorialSidebar"},"demo-app/configure":{"id":"demo-app/configure","title":"\ud83d\udc50 Configure the Application","description":"Now that your environment is set up, you can configure the application.","sidebar":"tutorialSidebar"},"demo-app/intro":{"id":"demo-app/intro","title":"\ud83d\udcd8 Documentation application","description":"This workshop demo application is built using Next.js, Tailwind CSS, OpenAI, LangChain, and the Vercel AI SDK. The starter template can be found here.","sidebar":"tutorialSidebar"},"demo-app/start-app":{"id":"demo-app/start-app","title":"\ud83d\udc50 Test the app","description":"Start the application at this point to verify that everything is working as expected.","sidebar":"tutorialSidebar"},"full-text-search/full-text-search":{"id":"full-text-search/full-text-search","title":"\ud83d\udcd8 Full Text Search","description":"Before we dive into Atlas Vector Search, it\'s important to understand the underlying technology that powers it. Atlas Vector Search is built on top of Atlas Search.","sidebar":"tutorialSidebar"},"full-text-search/how-search-works":{"id":"full-text-search/how-search-works","title":"\ud83d\udcd8 How Atlas Search Works","description":"Atlas Search uses inverted indexes to support text search queries. An inverted index is a data structure that maps each unique term in a collection to the documents that contain that term. The index is sorted by term, with each term referencing the documents that contain it.","sidebar":"tutorialSidebar"},"full-text-search/why-atlas-search":{"id":"full-text-search/why-atlas-search","title":"\ud83d\udcd8 Why Atlas Search","description":"Atlas Search is the built-in search solution for MongoDB Atlas. It is a fully managed service that is easy to set up, operate, and scale. Atlas Search is based on Apache Lucene and supports the Apache Lucene Query Parser Syntax. It supports text search, geospatial search, and faceted search.","sidebar":"tutorialSidebar"},"full-text-search/why-search":{"id":"full-text-search/why-search","title":"\ud83d\udcd8 Why Search","description":"Search is a powerful tool that will create a better experience for your users. It will help them find the content they are looking for faster and more efficiently. It will also help them discover content they didn\'t know existed.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"\ud83d\udcd8 Introduction","description":"|Workshop goals|Learn how to incorporate AI into your apps using Atlas Vector Search|","sidebar":"tutorialSidebar"},"mongodb-atlas/create-account":{"id":"mongodb-atlas/create-account","title":"\ud83d\udc50 Create your account","description":"To use MongoDB Atlas, you will need to start by creating an account. If you already have an account, you can skip this step.","sidebar":"tutorialSidebar"},"mongodb-atlas/create-cluster":{"id":"mongodb-atlas/create-cluster","title":"\ud83d\udc50 Create a cluster","description":"Now that you have a MongoDB Atlas account, you can create your first cluster. A cluster is a group of at least three servers that store your data. This ensures that your data is always available, even if one of the servers fails.","sidebar":"tutorialSidebar"},"mongodb-atlas/what-is-mongodb":{"id":"mongodb-atlas/what-is-mongodb","title":"\ud83d\udcd8 What is MongoDB Atlas","description":"MongoDB comes in many different flavors.  The most common is the open-source version that you can download and install on your computer.  However, there is also a cloud-based version of MongoDB that you can use.  This cloud offering is called MongoDB Atlas.","sidebar":"tutorialSidebar"},"openai/create-account":{"id":"openai/create-account","title":"\ud83d\udc50 Create your account","description":"To create embeddings using the OpenAI API, you need to create an account and get an API key.","sidebar":"tutorialSidebar"},"openai/what-is-openai":{"id":"openai/what-is-openai","title":"\ud83d\udcd8 What is OpenAI?","description":"OpenAI is a company that develops AI models for natural language processing. They offer an API that you can use to create embeddings for your documents. The API is called OpenAI\'s Embedding API.","sidebar":"tutorialSidebar"},"summary":{"id":"summary","title":"\ud83c\udfaf Summary","description":"Congratulations! Following this tutorial, you have successfully:","sidebar":"tutorialSidebar"},"vector-search/create-embeddings":{"id":"vector-search/create-embeddings","title":"\ud83d\udc50 Create embeddings","description":"We\'ll be using a fake dataset of markdown documents for a fake JavaScript library called FancyWidget.js. This set of documents can be found in the workshopassets folder of the demo repo.","sidebar":"tutorialSidebar"},"vector-search/create-index":{"id":"vector-search/create-index","title":"\ud83d\udc50 Create Vector Search indexes","description":"To start using Vector Search, you must configure another search index on your database.","sidebar":"tutorialSidebar"},"vector-search/implementing-vector-search":{"id":"vector-search/implementing-vector-search","title":"\ud83d\udcd8 Implementing Vector Search","description":"There are two components that you will need to do to implement vector search into your application.","sidebar":"tutorialSidebar"},"vector-search/semantic-search":{"id":"vector-search/semantic-search","title":"\ud83d\udcd8 Semantic Search","description":"What is semantic search?","sidebar":"tutorialSidebar"},"vector-search/update-routes":{"id":"vector-search/update-routes","title":"\ud83d\udc50 Update API routes","description":"We\'re now ready to implement changes to our API route in order to utilize Vector Search with our new embeddings.","sidebar":"tutorialSidebar"},"vector-search/what-are-vector":{"id":"vector-search/what-are-vector","title":"\ud83d\udcd8 What Are Vectors?","description":"Simply put, a vector is a list of numbers. For example, a vector of length 3 could be [1, 2, 3]. A vector of length 5 could be [1, 2, 3, 4, 5]. A vector of length 100 could be [1, 2, 3, 4, 5, ..., 100]. The length of a vector is the number of elements it contains.","sidebar":"tutorialSidebar"}}}')}}]);
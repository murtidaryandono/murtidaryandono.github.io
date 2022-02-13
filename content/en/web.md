---
title: "Web technology"
language: "en"
next: "web-fundamental.html"
---

**Web** is the most common platform that being used by institution/people to communicate each other. **Java** is one of reliable technology provider that powered the modernization of Web.
From small to Fortune 500 class company, you can find Java as underlying technology platform. The flexibility of Java technology create many frameworks for Web development,
one of them capturing my attention because of it's simplicity and easiness to use, the framework called as **Blade**.

**Blade** can be used with many type of architecture, Blade can be set as full stack Web application framework :

<div class="mermaid">
graph TD
A[Web browser] --- |Request/Response| B[Blade - Web framework]
B --- |Server| C[Netty]
B --- |Template| D[Jetbrick]
B --- |AJAX| H
D --- |Page| H
C --- |JVM| F[Java]
B --- |Logging| G[SL4J]
   subgraph Presentation layer
   H[HTML] --- I[Htmx]
   H --- J[Bulma]
   H --- K[Font Awesome]
   end
</div>

or can be set as JSON REST back end service :

<div class="mermaid">
graph TD
A[API call] --- |Request/Response| B[Blade - Web framework]
B --- |Server| C[Netty]
B --- |Database| D[MariaDB]
C --- |JVM| E[Java]
B --- |Logging| F[SL4J]
</div>

any configuration may set as long as it suits your goals. I will share some tutorial along with example that you can clone or fork from Github, so you can have better understanding about
Java technologies, including frameworks like Blade. For first tutorial about web, you can start with [Web basic](web-basic.html).

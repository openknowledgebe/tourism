Title: Open Standard for Tourism Ecosystems Data
Template: MultiMarkdown

<section id='abstract'>
This specification can and will bring a solution to one of the main issues in the field of application development for the tourism and leisure sector. A lot of projects fail because the underlying systems and databases are too difficult to connect or because it is too costly to do. This is a reason why tourism organisations are reluctant to  commision new applications, and it also slows down innovation in this field.
</section>

* * *

<section>

# License and Liability

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" class="cc" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Open Standard for Tourism Ecosystems Data</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.openknowledge.be" property="cc:attributionName" rel="cc:attributionURL">Open Knowledge Belgium</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="http://w3id.org/ost/ns" rel="dct:source">http://w3id.org/ost/ns</a>.

</section>

<section>

# Conformance Statement

A conformant implementation of this vocabulary MUST understand all vocabulary terms defined in this document.

</section>

<section>

# Contributors

The project of which this specification is a result, is quite unique in that it brings together different actors both in public and private sector sector. By working together to set up the domain model, we ensure that it is shared and supported by the most important players in this sector. This bottom-up approach proves to be far more effective than a top-down one in stimulation different players to work together.  This will have an impact on how tourism organisations and other players in this sector who will develop new databases, websites and mobile applications. Also, other sectors, like the heritage and museum sector, can benefit from the same approach. If they adopt the same domain model, it will be easier to exchange data between these different, but closely related, sectors.

The ‘user group’ of about 35-40 users consists of: SME’s, not-for-profit organizations involved in culture and tourism activities, representatives from the provinces and some of the major cities in the region. The fact that the user group is composed out of businesses, public administrations and not-for-profit organizations.

<table>
  <tr>
    <td>Name</td>
    <td>Organization</td>
  </tr>
  <tr>
    <td>Erik Mertz</td>
    <td>7 Scenes</td>
  </tr>
  <tr>
    <td>Carolien Willen</td>
    <td>Informatie Vlaanderen</td>
  </tr>
  <tr>
    <td>Jan Bossier</td>
    <td>Artspot</td>
  </tr>
  <tr>
    <td>Doenja Van Gampelaere</td>
    <td>CIB Vlaanderen vzw</td>
  </tr>
  <tr>
    <td>Luk Verhelst</td>
    <td>Cultuurnet</td>
  </tr>
  <tr>
    <td>Eric Smets</td>
    <td>FKS</td>
  </tr>
  <tr>
    <td>Reen Simoen</td>
    <td>Grote Routepaden</td>
  </tr>
  <tr>
    <td>Barbara Dierickx</td>
    <td>PACKED vzw</td>
  </tr>
  <tr>
    <td>Bert Lemmens</td>
    <td>PACKED vzw</td>
  </tr>
  <tr>
    <td>Sabine Denissen</td>
    <td>Provincie Antwerpen</td>
  </tr>
  <tr>
    <td>Susy Van Baelen</td>
    <td>Provincie Antwerpen</td>
  </tr>
  <tr>
    <td>Bram Elewaut</td>
    <td>Provincie Oost-Vlaanderen</td>
  </tr>
  <tr>
    <td>Eric Smets</td>
    <td>Stad Gent</td>
  </tr>
  <tr>
    <td>Nathalie Dumon</td>
    <td>Stad Gent</td>
  </tr>
  <tr>
    <td>Christophe Maes</td>
    <td>Stad Mechelen</td>
  </tr>
  <tr>
    <td>Jurgen Carlier</td>
    <td>Tales</td>
  </tr>
  <tr>
    <td>Sebastiaan Jammaers</td>
    <td>Toerisme Limburg</td>
  </tr>
  <tr>
    <td>Mario Stevens</td>
    <td>Toerisme Vlaanderen</td>
  </tr>
  <tr>
    <td>Johan Tuytte</td>
    <td>Westtoer</td>
  </tr>
  <tr>
    <td>Marc Portier</td>
    <td>Westtoer</td>
  </tr>
  <tr>
    <td>Matty Vincke</td>
    <td>Westtoer</td>
  </tr>
  <tr>
    <td>Michel Gilté</td>
    <td>Westtoer</td>
  </tr>
</table>

</section>

<section>

# About
This document was originally developed under the IWT/TETRA/CORNET Project on Sustainable Mobile Tourism Guides in Flanders (‘Mobiele Toeristische Gidsen in Vlaanderen’) following the [Process and Methodology for Developing Core Vocabularies](https://joinup.ec.europa.eu/node/43160).

<section>

## Cause and Context

Among tourist services, operators of tourist attractions, organizers of events and the like, a growing interest in digital mobile guides to support tourists and visitors during tours and visits is to be observed. Many do already have a solution of one kind or another, but it often turns out to be solutions that are not truly sustainable. They are often indeed designed for a particular device or platform, which after a few years, gets outdated. It then occurs, that one has to start all over again if one wants another solution. Also in the underlying systems, there are issues that constitute obstacles.

If one wants to switch to another application, the system is no longer usable, the data cannot be re-used or the whole underlying system has to be rebuilt from scratch. Further, most of these systems are also not compatible with other databases despite the fact that many tourist services or related companies do have a variety of databases with information, images and the like.

The fact that one always has to start all over again, brings a high development costs along. This in turn leads to very little room for innovation. The cost for building and filling the underlying system is so high that there is not enough budget to develop innovative applications which truly meet the needs of consumers.

The IWT-CORNET project "Towards a sustainable mobile tourism guide" was set up to address this issue. The aim of the project was to provide the tourism sector in Flanders and beyond with a re-usable architecture for the exchange of tourism related data and services, upon which innovative applications can be built. As a first step, the stakeholders of the project agreed on the domain model as described in this document. This will serve as a basis to build the underlying system core to our project. Nevertheless, the domain model on its own, as described here, will be published and open sourced so that it can serve a purpose beyond the scope of this project.

</section>

<section>

## Format

For each property of each entity we list the expected type, description and if available the reference to the (controlled) list of values that can be filled in or a reference with instructions on how to deal with a certain field.

<table>
  <tr>
    <td>Attribute/Property</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>(name of the propertyy)</td>
    <td>(type or object)</td>
    <td>(what is the property about and how to use it)</td>
    <td>URL</td>
  </tr>
</table>


The same for the relationships, there is a table for each relationship with the name of the relationship and the target entity.

<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>(label of the relationship, the predicate)</td>
    <td>(name of the entity)</td>
  </tr>
</table>

</section>

<section>

## Data and Metadata

<section>

### Data types

Several valid datatypes can be used as property values

<section>

#### Text

This is a free field, everything can be stored in here, without a certain formatting. However it is possible that the values are bound by a (controlled) list.

</section>

<section>

#### DateTime

This type ensure a correct formatting of data and time during the exchange.

</section>

<section>

#### PeriodOfTime

Consists of a startdate, optional end data and/or a clue on how long a certain resource is valid.

</section>

<section>

#### URI

A HTTP URI, used to refer to other resources or link to web pages.

</section>

<section>

#### Boolean

Is either true (1) or false (0).

</section>

<section>

#### Number

A valid number, no alphabetic characters or non-numeric special characters allowed.

</section>

</section>

<section>

### Metadata types

<section>

#### Code

In practice, each code is a separate entity with its own recurring attributes.	 	 	 		

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>key</td>
    <td>Text / URI</td>
    <td>Idenitification for the code that can be reused across applications as unique identification</td>
    <td></td>
  </tr>
  <tr>
    <td>label</td>
    <td>Text</td>
    <td>What the key depicts.</td>
    <td></td>
  </tr>
  <tr>
    <td>description</td>
    <td>Text</td>
    <td>Description of what the key depicts.</td>
    <td></td>
  </tr>
  <tr>
    <td>source</td>
    <td>Text / URI</td>
    <td>Where the key originates from, organization responsible for maintaining the key</td>
    <td></td>
  </tr>
  <tr>
    <td>version</td>
    <td>Text</td>
    <td>Version of the key</td>
    <td></td>
  </tr>
</table>

</section>

<section>

#### Identification

The identification attribute enables the entity to be linked to related entities, while retaining information about the notation, format, author and other metadata regarding how this entity can be identified and linked to its origin. The information model simplifies this by adding a simple ‘identification’ attribute wherever needed to benefit the readability of the model.

In practice, identification is a separate entity with its own attributes.	 	 	 		

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>notation</td>
    <td>Text</td>
    <td>The notation of this identifier</td>
    <td></td>
  </tr>
  <tr>
    <td>creator</td>
    <td>Text</td>
    <td>The name or description of this identifier.</td>
    <td></td>
  </tr>
  <tr>
    <td>schemeAgency</td>
    <td>URI</td>
    <td>The URI of the agency or organization responsible for this identifier.</td>
    <td></td>
  </tr>
  <tr>
    <td>issued</td>
    <td>DateTime</td>
    <td>The date this identifier was issued</td>
    <td></td>
  </tr>
</table>

</section>

</section>

</section>

</section>

<section>

# Domain Model

<section>

## Scope

The domain model as described in this document currently does not describe the entire domain of tourism and everything related to it. When defining the scope of this model, some choices needed to be made to ensure that we would be able to come up with a usable domain model that would be usable within the scope of the project we had in mind.

Hence the consortium involved in the definition of this model agreed to determine the most important parts of such a model and focus on those parts first, before further extending the model. The consortium involved consisted of research organisations, stakeholders from tourism organisations in Flanders as well as SME’s focused on delivering ICT products and services to these tourism organisations.

![image alt text](image_1.jpg)

The initial scope of this document was agreed on during a workshop session in Gent, Belgium on January 12 of 2015. Stakeholders first listed and then voted on a wide range of possible aspects of a domain model for tourism. A distinction was made based on the perceived priority of these aspects of the model for users of the data (e.g. app builders) and the perceived priority of aspects from the stance of the providers of the data. The end result of this qualitative excercise was aggregated into the figure below.

![image alt text](image_2.png)

Those aspects that were voted highest made the initial cut that can be found described in this document. These aspects of the domain model were further defined into the model described in this document in a series of workshops, once again involving all related stakeholders.

Related domains that did not make the initial scope are listed in section 6.2 for later reference and prioritisation.

</section>

<section>

## Related domains not in scope

A number of domains can be seen as closely related to the subject of tourism, but are not included in the domain model itself. For example data pertaining to public transport, while relevant to tourism, was deemed to be a much larger thing on its own.

This section of the document can be used to list such related domains linking to existing standards for thel where available. The list below is by no means exhaustive.

We welcome further suggestions of related domains to be listed as well as attempts to link or otherwise integrate them with this domain model.

![image alt text](image_3.png)

<table>
  <tr>
    <td>Domain</td>
    <td>Description</td>
    <td>More information</td>
  </tr>
  <tr>
    <td>Public Transport</td>
    <td>Everything pertaining to public transport</td>
    <td>To be completed</td>
  </tr>
  <tr>
    <td>Pricing</td>
    <td>Everything that extends our basic model of product pricing</td>
    <td><a href="http://www.heppnetz.de/ontologies/goodrelations/v1#PriceSpecification">Suggested model</a></td>
  </tr>
  <tr>
    <td>Labels and Licenses</td>
    <td>Everything pertaining to labels or licenses with regards to touristical products, organisations and other objects</td>
    <td>To be completed</td>
  </tr>
</table>

</section>

</section>

<section>

# Offering

<section>

## Product

The offering of organisations within the broader tourism sector aimed at the tourist as the consumer of said offering.

The product is described as objective as possible in this entity, leaving more elaborate description to be provided as part of the productDescription entity.

Products can be related to each other in a sibling or hierarchical relationship, enabling groups of similar products or products acting as a container for one or more sub-products.

Multiple product types extend the basic description of a product, optionally adding their own specific attributes to the description of a touristic product. These product types are described in the sub-sections following the general description of the Product entity.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>identification</td>
    <td>Identification</td>
    <td>A unique identifier for the product. The format follows the identification format as described in the metadata type description in section 1 of this document.</td>
    <td></td>
  </tr>
  <tr>
    <td>category</td>
    <td>skos:Concept (List)</td>
    <td>The reference code(s) that link(s) to a categorisation of the product. The referenced list is specific for each product type. These reference lists are listed in section 3.2.</td>
    <td>See section 3.2.</td>
  </tr>
  <tr>
    <td>provEntity</td>
    <td>Provenance Entity</td>
    <td>A unique identifier linking this entity to the Provenance Entity, which describes the originating source of this record and a historical overview of actions taken with regards to this product.</td>
    <td></td>
  </tr>
  <tr>
    <td>nature</td>
    <td>skos:Concept (List)</td>
    <td>Whether the product is temporary or permanent in nature. </td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>legal name</td>
    <td>Text</td>
    <td>The legal name of the product, not necessarily being the named used in marketing the product towards the consumer.</td>
    <td></td>
  </tr>
  <tr>
    <td>commercial name</td>
    <td>Text</td>
    <td>The commercial name of the product targeted towards the consumer.</td>
    <td></td>
  </tr>
  <tr>
    <td>abbreviation</td>
    <td>Text</td>
    <td>An abbreviation of the product name</td>
    <td></td>
  </tr>
  <tr>
    <td>capacity</td>
    <td>Number</td>
    <td>The number of consumers (people) this product can accept at any one time.
e.g. if it is lodging, the capacity is the sum of the official maximum capacity of all the rooms together.</td>
    <td></td>
  </tr>
  <tr>
    <td>length</td>
    <td>Text</td>
    <td>Description on how long the product takes or lasts, if relevant. This can be added as free text. </td>
    <td></td>
  </tr>
  <tr>
    <td>language</td>
    <td>Code (list)</td>
    <td>list of ISO 639-1 2-letter codes of the language(s) this product is available in.</td>
    <td><a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Reference</a></td>
  </tr>
  <tr>
    <td>description</td>
    <td>Text</td>
    <td>An objective description of the product, not necessarily aimed at the consumer.</td>
    <td></td>
  </tr>
  <tr>
    <td>slogan</td>
    <td>Text</td>
    <td>A slogan for the product.</td>
    <td></td>
  </tr>
  <tr>
    <td>bookingURL</td>
    <td>URI</td>
    <td>A URI that links to a website where this product can be booked at.</td>
    <td></td>
  </tr>
  <tr>
    <td>infoURL</td>
    <td>URI</td>
    <td>A URI that links to more information about the product.</td>
    <td></td>
  </tr>
  <tr>
    <td>isFree</td>
    <td>Boolean</td>
    <td>Whether the product is available free of charge (gratis) or not.</td>
    <td></td>
  </tr>
  <tr>
    <td>accessibilityLabel</td>
    <td>Text or URI</td>
    <td>Describes the provisions for accessibility of the product or its venue.</td>
    <td></td>
  </tr>
  <tr>
    <td>keywords</td>
    <td>Text (list)</td>
    <td>A list of keywords that describe the product.</td>
    <td></td>
  </tr>
  <tr>
    <td>targetGroup</td>
    <td>Code (list)</td>
    <td>The reference code(s) that link(s) to a description of the target group at which this product is aimed. </td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>facilities</td>
    <td>Code (list)</td>
    <td>The reference code(s) that link(s) to a description of the facilities available to consumers. This is linked to the product rather than the venue as availability of these facilities may vary depending on the product.</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
    <td>Cardinality</td>
  </tr>
  <tr>
    <td>rates</td>
    <td>Price</td>
    <td>0..n</td>
  </tr>
  <tr>
    <td>Is physically available at</td>
    <td>Location</td>
    <td>0..n</td>
  </tr>
  <tr>
    <td>Is detected via</td>
    <td>LocationDiscovery</td>
    <td>0..n</td>
  </tr>
  <tr>
    <td>Has opening hours</td>
    <td>Openinghours</td>
    <td>0..n</td>
  </tr>
  <tr>
    <td>Is related to </td>
    <td>Product</td>
    <td>0..n</td>
  </tr>
  <tr>
    <td>Consists of </td>
    <td>Product</td>
    <td>0..n</td>
  </tr>
</table>

**Product Types**

Various touristic products differ in nature and have the need to be described using a specific set of fields. Product Types extend the generic Product entity. The following product types have been identified (The category reference list to be used for each type is indicated in the second column) :

<table>
  <tr>
    <td>Product Type</td>
    <td>Category Reference List</td>
  </tr>
  <tr>
    <td>Arrangement</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>Attraction</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>Event</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>Lodging</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>MICE</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>RECA</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>Recreation</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>Regional Product</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>Route</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
</table>

![image alt text](image_4.png)

<section>

### Arrangement

A combination of existing products of a variety of types brought together in a single package (e.g. wellness weekend)

[More information](https://docs.google.com/document/d/12v1z4Wjdabv-Skck3A8cFWr8NJJLdNaX1hSfiOi_2zw/edit#)

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>days</td>
    <td>Number</td>
    <td>The number of days the arrangement spans or lasts</td>
    <td></td>
  </tr>
  <tr>
    <td>period</td>
    <td>Text</td>
    <td>What period or time of the year this arrangement is available at or focused towards. A textual description that can complement a more structured listing of opening hours. E.g. "Available throughout the summer" or “Weekends only”</td>
    <td></td>
  </tr>
  <tr>
    <td>numberOfPeople</td>
    <td>Number</td>
    <td>The amount of people that can participate in the arrangement when a single such arrangement is booked.</td>
    <td></td>
  </tr>
</table>

</section>

<section>

### Attraction

A place, product, installation or facility that offers an appeal or function to tourists in an indoor or outdoor location.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

</section>

<section>

### Event

A touristic product taking place at a specific and limited time, usually with a limited capacity.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

</section>

<section>

### Lodging

Touristic products that offer sleeping and related facilities.

<table>
  <tr>
    <td>Relation</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>room</td>
    <td>Room</td>
    <td>Links to a hotel’s Room</td>
    <td></td>
  </tr>
</table>

**Room**
<table>
  <tr>
    <td>Relation</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>hasPriceSpecification</td>
    <td>PriceSpecification</td>
    <td>Links to the pricespecification of a room.</td>
    <td><a href="http://ontologies.sti-innsbruck.at/acco/ns.html#CompoundPrice">More details</a></td>
  </tr>
  <tr>
    <td>partOf</td>
    <td>Lodging</td>
    <td>Links the room to its lodging facility</td>
    <td></td>
  </tr>
</table>

</section>

<section>

### Mice

[Meetings, incentives, conferencing and exhibitions](http://en.wikipedia.org/wiki/Meetings,_incentives,_conferencing,_exhibitions)


<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>capacity</td>
    <td>Number</td>
    <td>The (legal) maximum capacity of this room in number of people.</td>
    <td></td>
  </tr>
</table>

</section>

<section>

### Reca

Restaurants, cafe’s and related businesses and facilities

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>servesCuisine</td>
    <td>Literal </td>
    <td>Determines the type of kitchen this restaurant servers.</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference List</a></td>
  </tr>
</table>

</section>

<section>

### Regional Product

A product typical for or tied to a specific geographical region.

[More information](https://docs.google.com/document/d/1ICb0ILCmhmdxc2JEMOV5hE8rXguCizHKNiokTM7pxH0/edit)

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

</section>

<section>

### Route

A route is a trajectory a tourist can follow as a touristical experience. Routes have specific recreationTypes, describing the mode of transport suggested or required for the route (e.g. walking, biking, …).

Routes can either be spatially described using geometry (called a "GemoetryBasedRoute") or as a network of nodes that should be navigated in a suggested order.

Routes can be equipped with signage, assisting the tourist in navigating the route, using one or more related and visible or otherwise detectable markings.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>openedDate</td>
    <td>Date</td>
    <td>The day the route was opened for use.</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
    <td>Comment</td>
  </tr>
  <tr>
    <td>contactPoint</td>
    <td>Organization</td>
    <td>Which organisation can be contacted for more information or questions, with regards to the Route</td>
  </tr>
  <tr>
    <td>maintainedBy</td>
    <td>Organization</td>
    <td>Which organisation is responsible for the maintenance of the Route</td>
  </tr>
</table>


**GeometryBasedRoute**

A route described using a geometric form.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>length</td>
    <td>Number</td>
    <td>The total length of the route in meters</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
    <td>Comment</td>
  </tr>
  <tr>
    <td>trajectory</td>
    <td>Geometry</td>
    <td>A geometric form spanning the route</td>
  </tr>
</table>


**EntryPoint**

Describes the entry location(s) of a ThemedRoute

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>name</td>
    <td>text</td>
    <td>Name of the entry location</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
    <td>Comments</td>
  </tr>
  <tr>
    <td>belongsTo</td>
    <td>ThemedRoute</td>
    <td>Assigns a location as a possible entry point for</td>
  </tr>
  <tr>
    <td>location</td>
    <td>Location</td>
    <td></td>
  </tr>
</table>


**NetworkBasedRoute**

A description of a route based on a network of NetworkElements

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>length</td>
    <td>number</td>
    <td>The total length of the route in meters</td>
    <td></td>
  </tr>
  <tr>
    <td>isClosedLoop</td>
    <td>boolean</td>
    <td>determines whether a route is circular (ends where it starts) or not (thus linear)</td>
    <td></td>
  </tr>
  <tr>
    <td>isBothWays</td>
    <td>boolean</td>
    <td>indicates whether a route can be followed both ways (start to end and vise versa).</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
    <td>Cardinality</td>
    <td>Comments</td>
  </tr>
  <tr>
    <td>trajectoryDescription (list)</td>
    <td>NetworkElement </td>
    <td>2..n</td>
    <td>The sequence of NetworkElements determines the trajectory.</td>
  </tr>
</table>


**Network**

A Network is a set of NetworkElements (e.g. Knooppuntennetwerk)

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>belongsTo</td>
    <td>NetworkGroup</td>
  </tr>
</table>


**NetworkGroup**

A group of Networks

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>Type</td>
    <td>Code </td>
    <td>The reference code(s) that link(s) to a description of the type of network group.</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
</table>


**NetworkElement**

An individual Connection or Junction in a Network

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
    <td>Cardinality</td>
  </tr>
  <tr>
    <td>belongsTo</td>
    <td>Network</td>
    <td>1..n</td>
  </tr>
</table>


**Connection**

A connection between two Junctions in a Network

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>location</td>
    <td>Location</td>
    <td>The geographical location of the connection</td>
    <td></td>
  </tr>
  <tr>
    <td>distance</td>
    <td>Number</td>
    <td>the distance, in kilometers, between the two Junctions of the Network</td>
    <td></td>
  </tr>
  <tr>
    <td>soilType</td>
    <td>Text</td>
    <td>The soil type predominant at the connection’s location</td>
    <td></td>
  </tr>
  <tr>
    <td>isOneWayDirection</td>
    <td>Boolean</td>
    <td>Describes whether the connection is meant to be followed only from startJunction to endJunction or can also be followed the other way around.</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>trajectory</td>
    <td>Geometry</td>
  </tr>
  <tr>
    <td>startJunction</td>
    <td>Junction</td>
  </tr>
  <tr>
    <td>endJunction</td>
    <td>Junction</td>
  </tr>
</table>


**Junction**

A junction in a Network (e.g. individual Knooppunt)

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>number</td>
    <td>Number</td>
    <td>The number assigned to this junction, making it visually recognisable</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>location</td>
    <td>Location</td>
  </tr>
</table>


**Signage**

Signage lists and describes the visual signs present along the path of a Route that the tourist can use to navigate the Route.

**Marker**

Markers are the physical and visual entities installed across the path of a Route. Different types of markers extend the general Marker entity.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>location</td>
    <td>Location</td>
    <td>The geographical location of a Route’s signage marker</td>
    <td></td>
  </tr>
  <tr>
    <td>height</td>
    <td>Number</td>
    <td>The height, in meters, at which the marker is positioned</td>
    <td></td>
  </tr>
  <tr>
    <td>imageURI</td>
    <td>URI</td>
    <td>A URI pointing to an image of the marker in its proper location</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>Belongs to a</td>
    <td>Route</td>
  </tr>
  <tr>
    <td>Belongs to a</td>
    <td>Bearer</td>
  </tr>
</table>


**Bearer**

Bearers are the physical objects that Markers are installed or placed on, so that they remain fixed in location and visible to the tourist.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>type</td>
    <td>Text</td>
    <td>Textual description of the type of bearer. No standardised taxonomy exists for this attribute in this version of the model.</td>
    <td></td>
  </tr>
  <tr>
    <td>owner</td>
    <td>Organisation</td>
    <td>The organisation that owns or is responsible for the bearer.</td>
    <td></td>
  </tr>
  <tr>
    <td>location</td>
    <td>Location</td>
    <td>The geographical location of the bearer.</td>
    <td></td>
  </tr>
</table>


**Notification**

A notification regarding the state of a Marker (e.g. obstructed, missing)

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>subject</td>
    <td>Text</td>
    <td>A description of the state of a Marker</td>
    <td></td>
  </tr>
  <tr>
    <td>reporter</td>
    <td>Text</td>
    <td>Who is the author of the notification</td>
    <td></td>
  </tr>
  <tr>
    <td>status</td>
    <td>Text</td>
    <td>Assigns a workflow state on the process behind resolving the notification.</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>about</td>
    <td>Marker</td>
  </tr>
  <tr>
    <td>location</td>
    <td>Location</td>
  </tr>
</table>


**CorrectingAction**

An action taken by an Organization towards resolving a Notification

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>date</td>
    <td>Data</td>
    <td>Date at which the CorrectingAction is done</td>
    <td></td>
  </tr>
  <tr>
    <td>description</td>
    <td>Text</td>
    <td>A description of the action</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>Regarding</td>
    <td>Notification</td>
  </tr>
  <tr>
    <td>executedBy</td>
    <td>Organisation</td>
  </tr>
</table>


**Panel**

A marker visualised on a directions panel, standing or hanging.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


**Sign**

A visual sign with an arrow, put up to indicate the direction in a route.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>arrowDirection</td>
    <td>Code</td>
    <td>The direction of the arrow on the sign</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>viewDirection</td>
    <td>Number</td>
    <td>The bearing, in degrees towards the North, the front of the sign should face. E.g. 90° = East, 315° = North-West</td>
    <td></td>
  </tr>
  <tr>
    <td>trajectoryDirection</td>
    <td>Text</td>
    <td>The direction in the trajectory of the Route the arrow points in.</td>
    <td></td>
  </tr>
</table>


**Sticker**

A sticker, indicating the direction in a route.

**PaintMarker**

A painted indication of the direction in a route.

</section>

<section>

### Factoid

Interesting facts or events that occurred on a certain place, but not physically present anymore, but interesting to know for people visiting this location.

</section>

</section>

<section>

## Organisation

An organisation offering one or more products or services related to the Tourism industry. These could be organisations that offer or organise Products, but plenty of other entities within the model refer to the Organisation entity to describe responsability, contact details or more.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>identification</td>
    <td>Identification</td>
    <td>A unique identifier for the Organisation.</td>
    <td></td>
  </tr>
  <tr>
    <td>legalName</td>
    <td>Text</td>
    <td>The legal name of the organisation</td>
    <td></td>
  </tr>
  <tr>
    <td>alternativeName</td>
    <td>Text</td>
    <td>An alternative name for the organisation</td>
    <td></td>
  </tr>
  <tr>
    <td>preferredName</td>
    <td>Text</td>
    <td>The name preferred for use when displaying the organisation’s name to application users. This can be the value of legalName or alternativeName</td>
    <td></td>
  </tr>
  <tr>
    <td>type_KBO</td>
    <td>Code</td>
    <td></td>
    <td>(V)KBO</td>
  </tr>
  <tr>
    <td>status_KBO</td>
    <td>Code</td>
    <td></td>
    <td>(V)KBO</td>
  </tr>
  <tr>
    <td>activity_NACE</td>
    <td>Code</td>
    <td></td>
    <td>Nace</td>
  </tr>
  <tr>
    <td>registration_KBOnr</td>
    <td>Text</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>contactInformation</td>
    <td>URI</td>
    <td>uri of where the vcard can be found (either as vcf or rdf)</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>offers</td>
    <td>Product</td>
  </tr>
  <tr>
    <td>maintains</td>
    <td>Statistics</td>
  </tr>
  <tr>
    <td>provides</td>
    <td>ProductChannel</td>
  </tr>
</table>

</section>

<section>

## Price

The price of a product or related entity.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>reduction</td>
    <td>text or URI</td>
    <td>In case of elaborate reduction schemes, a description or a URI pointing to more information</td>
    <td></td>
  </tr>
  <tr>
    <td>currency</td>
    <td>Text</td>
    <td>The currency in which the price is expressed. Described in ISO 4217.</td>
    <td><a href="https://en.wikipedia.org/wiki/ISO_4217">ISO 4217</a></td>
  </tr>
  <tr>
    <td>buy</td>
    <td>Text</td>
    <td>The buying price. The price the organisation offering the product paid.</td>
    <td></td>
  </tr>
  <tr>
    <td>sell</td>
    <td>Text</td>
    <td>The selling price. This is the consumer price.</td>
    <td></td>
  </tr>
  <tr>
    <td>validityPeriod</td>
    <td>Text</td>
    <td>A description of when this price is valid.</td>
    <td></td>
  </tr>
  <tr>
    <td>targetGroup</td>
    <td>Code (List)</td>
    <td>Reference to the target group for this Price</td>
    <td></td>
  </tr>
</table>

</section>

</section>

<section>

# Experience

<section>

## ProductDescription

A product description describes a touristic product in a way so that the description fits a specific target group, end-user context and medium. Multiple ProductDescription entities can refer to the same Product. Descriptions can be multimedial and used on their own or in combination with other descriptions of the same product, when combined in a ProductSelection entity.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>identification</td>
    <td>Identification</td>
    <td>A unique identifier for the product description. The format follows the identification format as described in the metadata type description in section 1 of this document.</td>
    <td></td>
  </tr>
  <tr>
    <td>Type</td>
    <td>Code</td>
    <td>The reference code that links to a categorisation of the product description.</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>provEntity</td>
    <td>Provenance</td>
    <td>A unique identifier linking this entity to the provenance Entity, which describes the originating source of this record.</td>
    <td></td>
  </tr>
  <tr>
    <td>description</td>
    <td>Text</td>
    <td>Describes this product description objectively towards users of the description (not tourists)</td>
    <td></td>
  </tr>
  <tr>
    <td>quality</td>
    <td>Text</td>
    <td>Describes the of </td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>Describes </td>
    <td>Product</td>
  </tr>
  <tr>
    <td>related to</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>consists of</td>
    <td>Product</td>
  </tr>
</table>

</section>

<section>

## CreativeWork

Creative Work generalises a ProductDescription or ProductChannel describing tags and social media shares.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>hasTag</td>
    <td>Text (List)</td>
    <td>Tags describing the entity</td>
    <td></td>
  </tr>
  <tr>
    <td>shares</td>
    <td>text (List)</td>
    <td>A a list of URLs on social media listing posts that share/cite this creativework?</td>
    <td></td>
  </tr>
</table>

</section>

<section>

## ProductChannel

A Channel publishes one or more ProductDescriptions.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>identification</td>
    <td>Identification</td>
    <td>A unique identifier for the Channel. The format follows the identification format as described in the metadata type description in section 1 of this document.</td>
    <td></td>
  </tr>
  <tr>
    <td>type</td>
    <td>Code (List)</td>
    <td>The reference code that links to a categorisation of the product description.</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>name</td>
    <td>text</td>
    <td>The name of this ProductChannel</td>
    <td></td>
  </tr>
  <tr>
    <td>url</td>
    <td>text</td>
    <td>The URL for this ProductChannel</td>
    <td></td>
  </tr>
  <tr>
    <td>uriTemplate</td>
    <td>text</td>
    <td>"the (optional) uri-template that generates the webreferences to the products published inside this channel, by filling in the named propery-values of the actual products" -- the names to use are the attribute-names of the "product" entity in this specification. This allows endusers to predict the deep-link-url inside the publication channel to each specific product.</td>
    <td><a href="https://tools.ietf.org/html/rfc6570">More information</a></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
    <td>Cardinality</td>
  </tr>
  <tr>
    <td>publishes </td>
    <td>ProductSelection</td>
    <td>0..n</td>
  </tr>
  <tr>
    <td>publishes</td>
    <td>ProductDescription</td>
    <td>0..n</td>
  </tr>
</table>

</section>

<section>

## ProductSelection

The link between a channel and a product. Describes which Products are related to the channel describing the Product.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>identification</td>
    <td>Identification</td>
    <td>A unique identifier for the Product Selection. The format follows the identification format as described in the metadata type description in section 1 of this document.</td>
    <td></td>
  </tr>
  <tr>
    <td>origin</td>
    <td>provenanceEntity</td>
    <td>Describes which provenanceEntity provided the selection</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>describes </td>
    <td>Product</td>
  </tr>
</table>

</section>

<section>

## PublicationIssue

Describes a specific issue of a product channel (e.g. Magasine issue)

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>identification</td>
    <td>Identification</td>
    <td>A unique identifier for the PublicationIssue. The format follows the identification format as described in the metadata type description in section 1 of this document.</td>
    <td></td>
  </tr>
  <tr>
    <td>provEntity</td>
    <td>Provenance Entity</td>
    <td>A unique identifier linking this entity to the Provenance Entity, which describes the originating source of this record and a historical overview of actions taken with regards to it.</td>
    <td></td>
  </tr>
  <tr>
    <td>publicationDate</td>
    <td>Date</td>
    <td>The date of publication for this PublicationIssue</td>
    <td></td>
  </tr>
  <tr>
    <td>nature</td>
    <td>Text</td>
    <td>A free description of the nature of this PublicationIssue</td>
    <td></td>
  </tr>
  <tr>
    <td>url</td>
    <td>text</td>
    <td>The URL of the PublicationIssue</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>hasMedium </td>
    <td>ProductChannel</td>
  </tr>
  <tr>
    <td>describes</td>
    <td>ProductSelection</td>
  </tr>
</table>

</section>

</section>

<section>

# Availability

<section>

## Location

A location describes the physical location at which products or related entities from this model can be found at. A Location can have an Address and a Geometry describing it. A Location can be part of a region but also be related to other Locations: being a parent of one, a child of one, a match of one or being near to one.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>identification</td>
    <td>Identification</td>
    <td>A unique identifier for the Location. The format follows the identification format as described in the metadata type description in section 1 of this document.</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>hasAddress</td>
    <td>Address</td>
  </tr>
  <tr>
    <td>hasGeometry</td>
    <td>Geometry</td>
  </tr>
  <tr>
    <td>hasRegion</td>
    <td>Region</td>
  </tr>
  <tr>
    <td>isParentOf</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>isChildOf</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>isExactMatchOf</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>isNearby</td>
    <td>Location</td>
  </tr>
</table>

</section>

<section>

## Tourism Region

Tourism Regions are geographical regions specifically named and designated for tourism purposes. They may be differently named than the exact geographical region names of an area. The idea here is that each area often comes up with its own naming of geographical areas in terms of tourism. This entity allows such naming.



<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>label</td>
    <td>Code (List)</td>
    <td>The reference code that links to a standardised label naming of the region.</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
  <tr>
    <td>description</td>
    <td>Code (List)</td>
    <td>The reference code that links to a standardised description of the region.</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
</table>

</section>

<section>

## Geometry

Describes a Location using a geometric shape positioned on a specific location. Apart from coordinates, the model allows for both WKT (Well known text) as GML (Geography Markup Language) to be used to describe the Geometry.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>lat</td>
    <td>Text</td>
    <td>the latitude of a geometry</td>
    <td></td>
  </tr>
  <tr>
    <td>long</td>
    <td>Text</td>
    <td>the longitude of a geometry</td>
    <td></td>
  </tr>
  <tr>
    <td>wktString</td>
    <td>Text</td>
    <td>The WKT (well known text) string notation of the Geometry</td>
    <td><a href="http://en.wikipedia.org/wiki/Well-known_text">Reference</a></td>
  </tr>
  <tr>
    <td>gmlDescription</td>
    <td>Text</td>
    <td>The GML notation of the Geometry</td>
    <td><a href="http://en.wikipedia.org/wiki/Geography_Markup_Language">Reference</a></td>
  </tr>
</table>

</section>

<section>

## Address

Describes a Location using an address.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>identification</td>
    <td>Identification</td>
    <td>A unique identifier for the Address. The format follows the identification format as described in the metadata type description in section 1 of this document.</td>
    <td></td>
  </tr>
  <tr>
    <td>fullAddress</td>
    <td>Text</td>
    <td>Describes the full address following an INSPIRE/ISA notation</td>
    <td><a href="http://www.w3.org/ns/locn">Reference</a></td>
  </tr>
  <tr>
    <td>POBox</td>
    <td>Text</td>
    <td>The PO Box number</td>
    <td></td>
  </tr>
  <tr>
    <td>thoroughfare</td>
    <td>Text</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>locator</td>
    <td>Text</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>postal code</td>
    <td>Text</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>locality</td>
    <td>Text</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>city</td>
    <td>Text</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>province_AU_L2</td>
    <td>Text</td>
    <td>The name of the province
(INSPIRE Administrative Unit Level 2)</td>
    <td></td>
  </tr>
  <tr>
    <td>country_AU_L1</td>
    <td>Text</td>
    <td>The name of the country
(INSPIRE Administrative Unit Level 1)</td>
    <td></td>
  </tr>
</table>

</section>

<section>

## Location Discovery

LocationDiscovery entries make it possible to indicate how a Product is made discoverable for technologies by using QR, NFC or RFID tags for example. This entity allows the type of discovery technology to scale as new technologies emerge.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>code</td>
    <td>Text</td>
    <td>the unique identifier of the LocationDiscover entry</td>
    <td></td>
  </tr>
  <tr>
    <td>type</td>
    <td>Code</td>
    <td>The reference code that links to a standardised description of the type of location discovery technology.</td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
</table>

</section>

<section>

## Opening Hours

Describes the opening hours during which a product is accessible or able to be experienced by tourists. A simple description offers a non-structured way to describe this, while a more structured way to offer the data is made available via OpeninghourSpecifications and OpeninghourCalendar entities.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>description</td>
    <td>Text</td>
    <td>A textual description of the opening hours. This can be structured in any way. </td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>specifiedBy</td>
    <td>OpeninghourSpecifications</td>
  </tr>
  <tr>
    <td>calendar</td>
    <td>OpeninghourCalendar</td>
  </tr>
</table>

<section>

### Opening Hours Specification

A structured description of opening hours following the schema.org [openinghours](http://schema.org/OpeningHoursSpecification) specification. 	

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>closes</td>
    <td>Time</td>
    <td>Describes when the Product is closed</td>
    <td></td>
  </tr>
  <tr>
    <td>dayOfWeek</td>
    <td>DayOfWeek</td>
    <td>Describes the day of the week the opening hours for this Product are valid.</td>
    <td></td>
  </tr>
  <tr>
    <td>opens</td>
    <td>Time</td>
    <td>Describes when the Product is opened</td>
    <td></td>
  </tr>
  <tr>
    <td>validFrom</td>
    <td>DateTime</td>
    <td>Describes starting when this entry is valid</td>
    <td></td>
  </tr>
  <tr>
    <td>validThrough</td>
    <td>DateTime</td>
    <td>Describes until when this entry is valid</td>
    <td></td>
  </tr>
  <tr>
    <td>requiresAppointment</td>
    <td>Boolean</td>
    <td>Set to TRUE if an appointment is needed for these opening hours. Set to FALSE if an appointment is not needed. If not included, FALSE is assumed.</td>
    <td></td>
  </tr>
</table>

</section>

<section>

### Opening Hours Calendar

Link to a calendar file describing the opening or closing hours of a Product

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>downloadURLICAL</td>
    <td>Text</td>
    <td>The download location of the ICAL file describing the calendar</td>
    <td></td>
  </tr>
  <tr>
    <td>isClosingHours</td>
    <td>Boolean</td>
    <td>Indicates whether or not the calendar is a description of the closing times rather than the opening times of a Product. If isClosingHours is not included, then it is assumed to be false.</td>
    <td></td>
  </tr>
</table>

</section>

</section>

</section>

<section>

# Demand

<section>

## Statistics

Describes any statistics relevant to the tourism sector. Can be related to a specific Product. Statistics are described by linking to one or more Columns, whereas Reports refer to Statistics to pinpoint specific files or resources offering these Statistics.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>keywords</td>
    <td>Text (List)</td>
    <td>A list of keywords describing the Statistic</td>
    <td></td>
  </tr>
  <tr>
    <td>primaryKeyColumn</td>
    <td>Text</td>
    <td>The name of the Column which acts as the primary key for this Statistic</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Relationship</td>
    <td>Target Entity</td>
  </tr>
  <tr>
    <td>Involves</td>
    <td>Product</td>
  </tr>
  <tr>
    <td>Has</td>
    <td>Column</td>
  </tr>
  <tr>
    <td>Has</td>
    <td>Location</td>
  </tr>
</table>

</section>

<section>

## Column

Describes a single Column of a Statistic.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>label</td>
    <td>Text</td>
    <td>Labels the column’s header</td>
    <td></td>
  </tr>
  <tr>
    <td>title</td>
    <td>Text</td>
    <td>A title for the column</td>
    <td></td>
  </tr>
  <tr>
    <td>description</td>
    <td>Text</td>
    <td>A description for the column’s content</td>
    <td></td>
  </tr>
  <tr>
    <td>datatype</td>
    <td>Text</td>
    <td>The specific datatype the column’s data should be in</td>
    <td></td>
  </tr>
  <tr>
    <td>format</td>
    <td>Text</td>
    <td>The specific format the column’s data should be in</td>
    <td></td>
  </tr>
</table>

</section>

<section>

## Report

Points to a specific report of a Statistic.

<table>
  <tr>
    <td>Attribute</td>
    <td>Expected Type</td>
    <td>Description</td>
    <td>Reference</td>
  </tr>
  <tr>
    <td>provEntity</td>
    <td>ProvenanceEntity</td>
    <td>A unique identifier linking this entity to the Provenance Entity, which describes the originating source of this record and a historical overview of actions taken with regards to this product.</td>
    <td></td>
  </tr>
  <tr>
    <td>downloadURLCSV</td>
    <td>Text</td>
    <td>The URL of the direct download location of the Report’s CSV file</td>
    <td></td>
  </tr>
  <tr>
    <td>disclosureDate</td>
    <td>Date</td>
    <td>The date on which the report was disclosed</td>
    <td></td>
  </tr>
  <tr>
    <td>period</td>
    <td>Text</td>
    <td>The period of time the report covers</td>
    <td></td>
  </tr>
  <tr>
    <td>license</td>
    <td>Text</td>
    <td>The license attached to this report</td>
    <td></td>
  </tr>
  <tr>
    <td>targetGroup</td>
    <td>Code (list)</td>
    <td>The target group(s) which this report refers to. </td>
    <td><a href="https://docs.google.com/spreadsheets/d/1rhWRjzGkTqOaKzD16UMZE76fHciCMFcl-gYvU_BTIjU">Reference</a></td>
  </tr>
</table>

</section>

</section>

<section>

# Mapping

The mapping guidelines below do not aim to redesign or remodel existing IT infrastructure of related data sources, but is intended to form an exchange layer between the various systems. It is a technology neutral specification, this means there is a decoupling of the implementation and the description. In this project meaningful processing of received tourism related data is key for developing smart mobile guides. The serialization ensures a correct representation of the data so it can be reused and interpreted by applications as expected.

The serialization is expressed in RDF. An RDF serialization makes optimal use of existing schemas and vocabularies. This is important so that applications and other RDF derived serializations can be linked maximally to the RDF serialization in this project without complex mapping modules. Furthermore it will guarantee the reuse of existing schemas that model the same or related domains. An additional advantage is that the set of new definitions needed to be introduced remains as limited as possible.

<section>

## Namespaces

The recommended namespace for this vocabulary is

    http://w3id.org/ost/ns#

and the recommended prefix to be used with it is `ost`

This vocabulary also references other vocabularies, as listed in the table below

<table>
  <tr>
    <td>Namespace</td>
    <td>Prefix</td>
    <td>Managed By</td>
    <td>Domain</td>
  </tr>
  <tr>
    <td>http://www.w3.org/ns/org#</td>
    <td>org</td>
    <td>W3C GLD</td>
    <td>Organisations</td>
  </tr>
  <tr>
    <td>http://www.w3.org/ns/regorg#</td>
    <td>regorg</td>
    <td>W3C GLD
</td>
    <td>Registered Organisations</td>
  </tr>
  <tr>
    <td>http://www.w3.org/ns/person#</td>
    <td>person</td>
    <td>ISA</td>
    <td>Persons</td>
  </tr>
  <tr>
    <td>http://www.w3.org/ns/locn#</td>
    <td>locn</td>
    <td>ISA</td>
    <td>Locations</td>
  </tr>
  <tr>
    <td>http://purl.org/dc/terms/</td>
    <td>dcterms</td>
    <td>DCMA</td>
    <td>Metadata</td>
  </tr>
  <tr>
    <td>http://schema.org/</td>
    <td>schema</td>
    <td>schema.org</td>
    <td>Markup, Metadata</td>
  </tr>
  <tr>
    <td>http://www.w3.org/2006/vcard/ns#</td>
    <td>vcard</td>
    <td>W3C</td>
    <td>Contact Information</td>
  </tr>
  <tr>
    <td>http://www.w3.org/ns/adms#</td>
    <td>adms</td>
    <td>WRC GLD</td>
    <td>Standards, Codelists, Asset Descriptions</td>
  </tr>
  <tr>
    <td>http://semweb.mmlab.be/ns/oh#</td>
    <td>oh</td>
    <td>OpeningHours.io</td>
    <td>Opening Hours, Calendars</td>
  </tr>
  <tr>
    <td>http://www.w3.org/2006/time#</td>
    <td>time</td>
    <td>W3C</td>
    <td>Time</td>
  </tr>
  <tr>
    <td>http://www.w3.org/ns/prov#</td>
    <td>prov</td>
    <td>W3C</td>
    <td>Provenance</td>
  </tr>
  <tr>
    <td>http://www.w3.org/ns/csvw#</td>
    <td>csvw</td>
    <td>W3C</td>
    <td>Statistical Schemas and Tabular Metadata</td>
  </tr>
  <tr>
    <td>http://purl.org/goodrelations/v1#</td>
    <td>gr</td>
    <td>GoodRelations</td>
    <td>Commercial Goods and Offerings</td>
  </tr>
  <tr>
    <td>http://purl.org/muto/core#</td>
    <td>muto</td>
    <td>MUTO</td>
    <td>Tags</td>
  </tr>
  <tr>
    <td>http://purl.org/acco/ns#</td>
    <td>acco</td>
    <td>Hepp Research GmbH</td>
    <td>Accommodation</td>
  </tr>
</table>

</section>

<section>

## Mappings

We make a distinction between classes and properties. For the classes there is a distinction between primary and secondary classes. Primary classes are the objects that are exchanged as a whole and can have properties. All primary objects must have an identifier. Secondary objects are objects which can be linked to primary objects and they enrich the primary objects. Literal properties should be annotated with their datatype (using XSD base types: string, date, dateTime, integer, float).

<section>

### Primary Class Mappings

<table>
  <tr>
    <td>Class</td>
    <td>RDF</td>
  </tr>
  <tr>
    <td>Organisation</td>
    <td>org:Organization</td>
  </tr>
  <tr>
    <td>Location</td>
    <td>dcterms:Location</td>
  </tr>
  <tr>
    <td>Address</td>
    <td>locn:Address</td>
  </tr>
  <tr>
    <td>LocationDiscovery</td>
    <td>ost:LocationDiscovery</td>
  </tr>
  <tr>
    <td>Product</td>
    <td>ost:Product < gr:Offering</td>
  </tr>
  <tr>
    <td>Price</td>
    <td>ost:Price < gr:PriceSpecification</td>
  </tr>
  <tr>
    <td>ProductDescription</td>
    <td>ost:ProductDescription < schema:CreativeWork</td>
  </tr>
  <tr>
    <td>ProductSelection</td>
    <td>ost:ProductSelection</td>
  </tr>
  <tr>
    <td>ProductChannel</td>
    <td>ost:ProductChannel < schema:CreativeWork</td>
  </tr>
  <tr>
    <td>PublicationIssue</td>
    <td>ost:PublicationIssue < schema:PublicationIssue</td>
  </tr>
  <tr>
    <td>Statistics</td>
    <td>csvw:Schema</td>
  </tr>
</table>

</section>

<section>

### Secondary Class Mappings

<table>
  <tr>
    <td>Class</td>
    <td>RDF</td>
  </tr>
  <tr>
    <td>Identification</td>
    <td>adms:identifier (adms:Identifier)</td>
  </tr>
  <tr>
    <td>Code (all types)</td>
    <td>skos:Concept</td>
  </tr>
  <tr>
    <td>Provenance Entity</td>
    <td>prov:Entity</td>
  </tr>
  <tr>
    <td>Contact</td>
    <td>vcard:VCard</td>
  </tr>
  <tr>
    <td>Geometry</td>
    <td>locn:Geometry</td>
  </tr>
  <tr>
    <td>OpeningHours</td>
    <td>oh:OpeningHours</td>
  </tr>
  <tr>
    <td>OpeningHoursSpecification</td>
    <td>schema:OpeningHoursSpecification</td>
  </tr>
  <tr>
    <td>OpeningHoursCalendar</td>
    <td>oh:Calendar</td>
  </tr>
  <tr>
    <td>Tourism Region</td>
    <td>ost:TourismRegion < skos:Concept</td>
  </tr>
  <tr>
    <td>Column</td>
    <td>csvw:Column</td>
  </tr>
  <tr>
    <td>Target Group</td>
    <td>ost:TargetGroup < skos:Concept</td>
  </tr>
</table>

</section>

<section>

### Product and all its subclasses

ost:Product, ost:Route, ost:Event, ost:MICE, ost:Lodging, ost:Reca, ost:Attraction, ost:Arrangement, ost:RegionalProduct, ost:Event and ost:Recreation.

Type depicts for product class what specific type it is. I.e. for lodging it can depict if something is a hotel, camping or guesthouse.

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>type</td>
    <td>dcterms:type</td>
    <td>skos:Concept</td>
  </tr>
  <tr>
    <td>nature</td>
    <td>ost:nature</td>
    <td>skos:Concept</td>
  </tr>
  <tr>
    <td>legalName</td>
    <td>ost:legalName</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>commercialName</td>
    <td>gr:name</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>abbreviation</td>
    <td>ost:abbreviation</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>capacity</td>
    <td>ost:capacity</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>length</td>
    <td>ost:length</td>
    <td>dcterms:SizeOrDuration</td>
  </tr>
  <tr>
    <td>language</td>
    <td>dcterms:language</td>
    <td>dcterms:LinguisticSystem</td>
  </tr>
  <tr>
    <td>description</td>
    <td>gr:description</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>slogan</td>
    <td>ost:slogan</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>bookingUrl</td>
    <td>ost:bookingUrl</td>
    <td>URI</td>
  </tr>
  <tr>
    <td>infoUrl</td>
    <td>ost:infoUrl</td>
    <td>URI</td>
  </tr>
  <tr>
    <td>isFree</td>
    <td>ost:isFree</td>
    <td>Boolean</td>
  </tr>
  <tr>
    <td>accessibilityLabel</td>
    <td>ost:accessibilityLabel</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>keywords</td>
    <td>dcterms:subject</td>
    <td>Literal (String)</td>
  </tr>
  <tr>
    <td>facility</td>
    <td>ost:facility</td>
    <td>skos:Concept (URI)</td>
  </tr>
  <tr>
    <td>relatedTo</td>
    <td>skos:related</td>
    <td>ost:Product (List)</td>
  </tr>
  <tr>
    <td>consistsOf</td>
    <td>ost:consistsOf</td>
    <td>ost:Product (List)</td>
  </tr>
  <tr>
    <td>rate</td>
    <td>ost:rate</td>
    <td>ost:Price</td>
  </tr>
  <tr>
    <td>targetGroup</td>
    <td>ost:targetGroup</td>
    <td>skos:Concept</td>
  </tr>
  <tr>
    <td>is physically available at</td>
    <td>locn:location</td>
    <td>locn:Location</td>
  </tr>
</table>

**Mice**

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>hallName</td>
    <td>ost:hallName</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>feature</td>
    <td>ost:feature</td>
    <td>skos:Concept -> List (Reference)</td>
  </tr>
  <tr>
    <td>dimension</td>
    <td>ost:dimensions</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>height</td>
    <td>ost:height</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>numberOfParkingSpots</td>
    <td>ost:numberOfParkignSpots</td>
    <td>Integer</td>
  </tr>
  <tr>
    <td>ecoLabels</td>
    <td>ost:ecoLabels</td>
    <td>Literal or URI (List)</td>
  </tr>
  <tr>
    <td>hallLayout</td>
    <td>ost:hallLayout</td>
    <td>Literal or Geometry</td>
  </tr>
</table>


**Lodging**

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>room</td>
    <td>ost:room</td>
    <td>acco:HotelRoom</td>
  </tr>
</table>


**Reca**

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>servesCuisine</td>
    <td>schema:servesCuisine</td>
    <td>Code</td>
  </tr>
</table>


**Arrangement**

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>numberOfDays</td>
    <td>ost:numberOfDays</td>
    <td>Integer</td>
  </tr>
  <tr>
    <td>period</td>
    <td>ost:period</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>numberOfPersons</td>
    <td>ost:numberOFPersons</td>
    <td>ost:Integer</td>
  </tr>
  <tr>
    <td>schedule</td>
    <td>ost:schedule</td>
    <td>Literal or URI</td>
  </tr>
</table>

</section>

<section>

### Route

A route is either a ThemedRoute, a NetworkBasedRoute or a Network.

General properties:

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>recreationType</td>
    <td>ost:recreationType</td>
    <td>skos:Concept (see ReferenceList)</td>
  </tr>
  <tr>
    <td>opened</td>
    <td>ost:opened</td>
    <td>Date</td>
  </tr>
  <tr>
    <td>contactPoint</td>
    <td>ost:contactPoint</td>
    <td>org:Organization</td>
  </tr>
  <tr>
    <td>maintainedBy</td>
    <td>ost:maintainedBy</td>
    <td>org:Organization</td>
  </tr>
</table>


ThemedRoute only properties:

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>trajectory</td>
    <td>ost:trajectory</td>
    <td>locn:Geometry</td>
  </tr>
  <tr>
    <td>length</td>
    <td>ost:length</td>
    <td>Float</td>
  </tr>
</table>


NetworkBasedRoute only properties:

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>length</td>
    <td>ost:length</td>
    <td>Float</td>
  </tr>
  <tr>
    <td>trajectoryDescription</td>
    <td>ost:trajectoryDescription</td>
    <td>ost:NetworkElement (List)</td>
  </tr>
</table>


Network only properties:

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>belongsTo</td>
    <td>ost:belongsTo</td>
    <td>NetworkGroup</td>
  </tr>
</table>


There are some helper components that describe the routes infrastructure and lay-out.

**NetworkGroup**

The type is bounded by the specification (see above)

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>type</td>
    <td>ost:networkGroupType</td>
    <td>Literal</td>
  </tr>
</table>


**Connection, Junction, NetworkElement**

A NetworkElement is either a Connection (edge) or a Junction (node).

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>belongsTo</td>
    <td>ost:belongsTo</td>
    <td>Network</td>
  </tr>
</table>


Connection specific properties:

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>trajectory</td>
    <td>ost:trajectory</td>
    <td>locn:Geometry</td>
  </tr>
  <tr>
    <td>soilType</td>
    <td>ost:soilType</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>isOneWay</td>
    <td>ost:isOneWay</td>
    <td>Boolean</td>
  </tr>
  <tr>
    <td>startJunction</td>
    <td>ost:startJunction</td>
    <td>ost:Junction</td>
  </tr>
  <tr>
    <td>endJunction</td>
    <td>ost:endJunction</td>
    <td>ost:Junction</td>
  </tr>
</table>


Junction specific properties:

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>location</td>
    <td>locn:location</td>
    <td>locn:Location</td>
  </tr>
  <tr>
    <td>number</td>
    <td>ost:number</td>
    <td>Integer</td>
  </tr>
</table>


**EntryPoint**

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>location</td>
    <td>locn:location</td>
    <td>locn:Location</td>
  </tr>
  <tr>
    <td>name</td>
    <td>dcterms:name</td>
    <td>Literal</td>
  </tr>
</table>

</section>

<section>

### Signage

**Marker**

A marker is either a Panel, Sign, Sticker or PaintMarker and can have these properties:

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>location</td>
    <td>ost:location</td>
    <td>locn:Location</td>
  </tr>
  <tr>
    <td>belongsTo</td>
    <td>ost:belongsTo</td>
    <td>ost:Route</td>
  </tr>
  <tr>
    <td>bearer</td>
    <td>ost:hasBearer</td>
    <td>ost:Bearer</td>
  </tr>
  <tr>
    <td>height</td>
    <td>schema:height</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>imageURI</td>
    <td>schema:image</td>
    <td>URI</td>
  </tr>
</table>


Sign specific properties:

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>arrowDirection</td>
    <td>ost:arrowDirection</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>viewDirection</td>
    <td>ost:viewDirection</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>trajectoryDirection</td>
    <td>ost:trajectoryDirection</td>
    <td>Literal</td>
  </tr>
</table>


**Bearer**

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>type</td>
    <td>dcterms:type</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>owner</td>
    <td>ost:hasOwner</td>
    <td>org:Organization</td>
  </tr>
  <tr>
    <td>location</td>
    <td>ost:location</td>
    <td>locn:Location</td>
  </tr>
</table>


**Notification**

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>reporter</td>
    <td>ost:reporter</td>
    <td>Literal or org:Organization</td>
  </tr>
  <tr>
    <td>location</td>
    <td>ost:location</td>
    <td>locn:Location</td>
  </tr>
  <tr>
    <td>subject</td>
    <td>dcterms:subject</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>status</td>
    <td>ost:status</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>about</td>
    <td>ost:about</td>
    <td>ost:Marker</td>
  </tr>
</table>


**CorrectingAction**

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>date</td>
    <td>ost:date</td>
    <td>Date</td>
  </tr>
  <tr>
    <td>description</td>
    <td>dcterms:description</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>executedBy</td>
    <td>ost:executedBy</td>
    <td>org:organization</td>
  </tr>
  <tr>
    <td>hasNotification</td>
    <td>ost:hasNotification</td>
    <td>ost:Notification</td>
  </tr>
</table>

</section>

<section>

### Organization

Fully represented by the W3C Organization and Registered Organization vocabulary. Use the description of [http://www.w3.org/TR/vocab-org/](http://www.w3.org/TR/vocab-org/) and [http://www.w3.org/TR/vocab-regorg/](http://www.w3.org/TR/vocab-regorg/).

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>legalName</td>
    <td>regorg:legalName</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>alternativeName</td>
    <td>dcterms:alternative</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>type_KBO</td>
    <td>regorg:orgType</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>status_KBO</td>
    <td>regorg:orgStatus</td>
    <td>Literal or skos:Concept</td>
  </tr>
  <tr>
    <td>activity_NACE</td>
    <td>regorg:orgActivity</td>
    <td>Literal or skos:Concept</td>
  </tr>
  <tr>
    <td>registration_KBOnr</td>
    <td>regorg:registration</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>contactinformation</td>
    <td>gr:description</td>
    <td>URI (<a href="https://tools.ietf.org/html/rfc6350">VCard</a>)</td>
  </tr>
  <tr>
    <td>offers</td>
    <td>ost:offers</td>
    <td>ost:Product</td>
  </tr>
</table>

</section>

<section>

### Price

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>reduction</td>
    <td>ost:reduction</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>buy</td>
    <td>ost:buy</td>
    <td>Float</td>
  </tr>
  <tr>
    <td>sell</td>
    <td>ost:sell < gr:hasCurrencyValue</td>
    <td>Float</td>
  </tr>
  <tr>
    <td>currency</td>
    <td>gr:hasCurrency</td>
    <td>String</td>
  </tr>
  <tr>
    <td>validityPeriod</td>
    <td>gr:validFrom, gr:validThrough</td>
    <td>Date</td>
  </tr>
  <tr>
    <td>targetgroup</td>
    <td>ost:targetGroup</td>
    <td>ost:TargetGroup</td>
  </tr>
</table>

</section>

<section>

### CreativeWork

CreativeWork as specified here: [https://schema.org/CreativeWork](https://schema.org/CreativeWork)

Following properties are common for all specifications of CreativeWork (ProductDescription, ProductChannel and PublicationIssue).

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>tags</td>
    <td>schema:keywords</td>
    <td>Literal (List)</td>
  </tr>
  <tr>
    <td>shares</td>
    <td>ost:shares</td>
    <td>schema:ShareAction (List)</td>
  </tr>
</table>

</section>

<section>

### ProductDescription

ProductDescription is a CreativeWork as specified here: [https://schema.org/CreativeWork](https://schema.org/CreativeWork)

Following properties are important and relevant for a ProductDescription.

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>type</td>
    <td>dcterms:type</td>
    <td>skos:Concept</td>
  </tr>
  <tr>
    <td>description</td>
    <td>dcterms:description</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>hasTag</td>
    <td>mtuo:hasTag</td>
    <td>muto:Tag</td>
  </tr>
  <tr>
    <td>quality</td>
    <td>schema:quality</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>format</td>
    <td>schema:format</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>length</td>
    <td>schema:duration</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>language</td>
    <td>schema:language</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>license</td>
    <td>schema:license</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>mediatype</td>
    <td>ost:mediatype</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>MIMEtype</td>
    <td>schema:fileFormat</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>creationDate</td>
    <td>schema:dateCreated</td>
    <td>Date</td>
  </tr>
  <tr>
    <td>modificationDate</td>
    <td>schema:dateModified</td>
    <td>Date</td>
  </tr>
  <tr>
    <td>thumbnailUrl</td>
    <td>schema:thumbnailUrl</td>
    <td>URI</td>
  </tr>
  <tr>
    <td>previewUrl</td>
    <td>ost:previewUrl</td>
    <td>URI</td>
  </tr>
  <tr>
    <td>Url</td>
    <td>schema:url</td>
    <td>URI</td>
  </tr>
  <tr>
    <td>describes</td>
    <td>ost:describes</td>
    <td>ost:Product</td>
  </tr>
  <tr>
    <td>consists of</td>
    <td>ost:consistsOf</td>
    <td>ost:ProductDescription</td>
  </tr>
</table>

</section>

<section>

### ProductSelection

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>describes</td>
    <td>ost:describes</td>
    <td>ost:Product (List)</td>
  </tr>
</table>

</section>

<section>

### ProductChannel

ProductChannel is a CreativeWork as specified here: [https://schema.org/CreativeWork](https://schema.org/CreativeWork)

Following properties are important and relevant for a ProductChannel.

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>type</td>
    <td>dcterms:type</td>
    <td>skos:Concept</td>
  </tr>
  <tr>
    <td>name</td>
    <td>dcterms:name</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>url</td>
    <td>schema:url</td>
    <td>URI</td>
  </tr>
  <tr>
    <td>urlTemplate</td>
    <td>ost:urlTemplate</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>publishes</td>
    <td>ost:publishes</td>
    <td>ost:ProductSelection</td>
  </tr>
  <tr>
    <td>publishes</td>
    <td>ost:publishes</td>
    <td>ost:ProductDescription</td>
  </tr>
</table>

</section>

<section>

### PublicationIssue

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>type</td>
    <td>dcterms:type</td>
    <td>skos:Concept</td>
  </tr>
  <tr>
    <td>name</td>
    <td>schema:datePublished</td>
    <td>Date</td>
  </tr>
  <tr>
    <td>url</td>
    <td>schema:url</td>
    <td>URI</td>
  </tr>
  <tr>
    <td>hasMedium</td>
    <td>ost:hasMedium</td>
    <td>ost:ProductChannel</td>
  </tr>
  <tr>
    <td>describes</td>
    <td>ost:describes</td>
    <td>ost:ProductSelection</td>
  </tr>
</table>

</section>

<section>

### OpeningHours

**OpeningHoursCalendar**

Fully represented by the [http://openingHours.io](http://openinghours.io)  vocabulary.

**OpeningHoursSpecification**

Represented by the [http://schema.org/OpeningHoursSpecification](http://schema.org/OpeningHoursSpecification). and extended with the following property:

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>requiresAppointment</td>
    <td>ost:requiresAppointment</td>
    <td>Boolean</td>
  </tr>
</table>


**LocationDiscovery**

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>code</td>
    <td>ost:code</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>type</td>
    <td>dcterms:type</td>
    <td>skos:Concept</td>
  </tr>
</table>

</section>

<section>

### Location, Geometry and Address

Fully represented by the W3C Location vocabulary. Use the description of http://www.w3.org/ns/locn but where Location itself is used as RDF Resource to refer to Geometry and Address.

Location introduces some extra properties not included in the original vocabulary.

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>isNearby</td>
    <td>ost:isNearby</td>
    <td>Location</td>
  </tr>
</table>

</section>

<section>

### Statistics

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>keywords</td>
    <td>dcterms:subject</td>
    <td>Literal (List)</td>
  </tr>
  <tr>
    <td>primaryKeyColumn</td>
    <td>csvw:primaryKey</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>involves</td>
    <td>ost:involves</td>
    <td>(olca:rangeIncludes)
ost:Product OR locn:Location</td>
  </tr>
</table>

</section>

<section>

### Report

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>provEntity</td>
    <td>prov:entity</td>
    <td>prov:Entity</td>
  </tr>
  <tr>
    <td>downloadURLCSV</td>
    <td>ost:downloadURLCSV</td>
    <td>URI</td>
  </tr>
  <tr>
    <td>disclosureDate</td>
    <td>dcterms:issued</td>
    <td>Date</td>
  </tr>
  <tr>
    <td>period</td>
    <td>dcterms:temporal</td>
    <td>dcterms:PeriodOfTime</td>
  </tr>
  <tr>
    <td>license</td>
    <td>dcterms:license</td>
    <td>URI</td>
  </tr>
  <tr>
    <td>targetGroup</td>
    <td>ost:targetGroup</td>
    <td>ost:TargetGroup</td>
  </tr>
</table>

</section>

<section>

### Column

Fully represented by the W3C group on tabular metadata: [http://www.w3.org/TR/tabular-metadata/](http://www.w3.org/TR/tabular-metadata/).

</section>

<section>

### Code

<table>
  <tr>
    <td>Property</td>
    <td>RDF</td>
    <td>Range</td>
  </tr>
  <tr>
    <td>code</td>
    <td>dcterms:identifier</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>label</td>
    <td>ovc:Label</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>description</td>
    <td>dcterms:description</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>version</td>
    <td>adms:version</td>
    <td>Literal</td>
  </tr>
  <tr>
    <td>source agency</td>
    <td>adms:schemeAgency</td>
    <td>Literal or URI</td>
  </tr>
</table>

</section>

<section>

### Identification

Fully represented by the ADMS specification identifier: [http://www.w3.org/TR/vocab-adms/#identifier](http://www.w3.org/TR/vocab-adms/#identifier).

</section>

</section>

</section>

<section>

# Change History

<table>
  <tr>
    <td>Version</td>
    <td>Date</td>
    <td>Notes</td>
  </tr>
  <tr>
    <td>0.9.0</td>
    <td>04/11/2015</td>
    <td>Public release of the final draft of this document.</td>
  </tr>
  <tr>
    <td>0.4.0</td>
    <td>27/04/2015</td>
    <td>Closed group release of version to obtain feedback from the project’s user group.</td>
  </tr>
</table>

</section>

<!--- Info about the scripts below: http://www.w3.org/respec/ref.html -->
<script src='respec-w3c-common.js'
		async class='remove'>
</script>

<script class='remove'>
  var respecConfig = {
	  // specification status (e.g. WD, LCWD, WG-NOTE, etc.). If in doubt use ED.
	  specStatus:           "unofficial",

	  // the specification's short name, as in http://www.w3.org/TR/short-name/
	  shortName:            "ost_spec",

	  // licensing
	  additionalCopyrightHolders: "Hosted by Open Knowledge Belgium,  2014-2015. This vocabulary is published under the CC BY 4.0 license.",

	  // if your specification has a subtitle that goes below the main
	  // formal title, define it here
	  subtitle   :  "Version 0.9.0 of w3id.org/ost/ns",

	  // if you wish the publication date to be other than the last modification, set this
	  publishDate:  "2015-11-04",

	  // if the specification's copyright date is a range of years, specify
	  // the start date here:
	  copyrightStart: "2014",

	  // if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
	  // and its maturity status
	  // previousPublishDate:  "2015-04-30",
	  // previousMaturity:  "WD",

	  // if there a publicly available Editor's Draft, this is the link
	  // edDraftURI:           "http://berjon.com/",

	  // if this is a LCWD, uncomment and set the end of its review period
	  // lcEnd: "2009-08-05",

	  // editors, add as many as you like
	  // only "name" is required
    authors: [
      {
          name:       "Laurens De Vocht"
      ,   mailto:     "laurens.devocht@ugent.be"
      ,   company:    "Ghent University - iMinds - Multimedia Lab"
      ,   companyURL: "http://iminds.be"
      }
      ,
      {
          name:       "Wouter Van den Bosch"
      ,   mailto:     "wouter.vandenbosch@iminds.be"
      ,   company:    "iMinds - Living labs"
      ,   companyURL: "http://iminds.be"
      }
    ],

	  editors:  [
		  {
	        name:       "Raf Buyle"
		  ,   mailto:     "raf.buyle@okfn.be"
		  ,   company:    "Open Knowledge Belgium"
		  ,   companyURL: "http://okfn.be"
		  },
      {
	        name:       "Bruno Koninckx"
		  ,   mailto:     "bruno.koninckx@thomasmore.be "
		  ,   company:    "Thomase More - Memori"
		  ,   companyURL: "http://memori.be"
		  },
      {
          name:       "Erik Mannens"
      ,   mailto:     "erik.mannens@ugent.be"
      ,   company:    "Ghent University - iMinds - Multimedia Lab"
      ,   companyURL: "http://iminds.be"
      }
	  ],

	  // name of the WG
	  wg:           "Open Tourism",

	  // URI of the public WG page
	  wgURI:        "http://tourism.openknowledge.be",

	  // name (without the @w3c.org) of the public mailing to which comments are due
	  // wgPublicList: "spec-writers-anonymous",

	  // URI of the patent status for this WG, for Rec-track documents
	  // !!!! IMPORTANT !!!!
	  // This is important for Rec-track documents, do not copy a patent URI from a random
	  // document unless you know what you're doing. If in doubt ask your friendly neighbourhood
	  // Team Contact.
	  // wgPatentURI:  "",
	  // !!!! IMPORTANT !!!! MAKE THE ABOVE BLINK IN YOUR HEAD
  };
</script>

<style>
  table tr:first-child {
      font-weight:bold;
  }

  tr:nth-child(even) td		{ background-color:#eee; }

  img {
     width: 100%;
  }
  img.cc {
     width: 88px;
  }
</style>

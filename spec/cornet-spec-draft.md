Title: CORNET - Toerisme Vocabularium
Template: MultiMarkdown

<section id='abstract'>
</section>

Released under the [ISA Open Metadata v1.1](https://joinup.ec.europa.eu/category/licence/isa-open-metadata-licence-v11) license.

<section>

# Inleiding

Dit document beschrijft het CORNET conceptueel model en de serialisatie in RDF.

</section>

<section>

# URI Strategie

De belangrijkste motivatie om te kiezen voor een URI-strategie is dat toepassingen en catalogi op een eenduidige manier kunnen verwijzen naar services die bestaan bij de verschillende overheden en gebruikers. Dit zal het hergebruik van de services maximaliseren en de impact bij wijzigingen voor implementaties minimaliseren. Dat kan aangezien alle dergelijke services op dezelfde manier hun resources toegankelijk maken.

Het basispatroon dat deze strategie vervult is (in lijn met http://www.opendataforum.info/Docs/URI_strategie_versie2):

	http://{domein}/{type}/{concept}/{referentie}

<section>

## Domein

Het domein bestaat uit het internet-domein en een pad. Het is best zo dat het domein van de URI een referentie bevat naar de bron waar het vandaan komt. 

Om het domein herkenbaar te houden voor ontwikkelaars en gebruikers, is het belangrijk om een generiek domein te voorzien in het belang van verschillende diensten die gecentraliseerd zijn rond een bepaald domein of sector.

Bvb. {service}.data.localgov.be/ of  data.localgov.be/{service}/ maar dit kan eventueel uitgebreid worden naar {eigendomein}/{eigenpad}/{service} of {service}.{eigendomein}/{eigenpad}.

</section>

<section>

## Type

Het type duidt op het soort service waarop aanspraak gemaakt wordt en dit heeft impact op hoe de referentie kan gebruikt worden.

Er zijn 2 types die minimaal dienen ondersteunt te worden:

- id: de referentie verwijst naar een concrete instantie van het concept
- lijst: een referentie is niet nodig, de lijst van concepten of van types concepten (indien geen concept wordt opgegeven) in het domein wordt weergegeven.

Op een lijst kunnen geavanceerdere operaties uitgevoerd worden zoals een custom filter dat kan toegepast worden een bepaald type concept of op het gehele domein of zoeken op tekstwaarde van een bepaald veld in het domein (al dan niet beperkt binnen een bepaald concept). Deze actie wordt meegegeven in de request (bvb. via de url parameters).

Daarnaast zijn er ook nog andere types mogelijk zoals een concretisatie van id (rijksregisternummer "rrk" of ondernemingsnummer "kbo".

</section>

<section>

## Concept

Het type duidt aan wat voor soort identiteit het gaat waarnaar verwezen wordt met de identifier. In het bijzonder zijn hier de geldige concepten (met Nederlandstalige terminologie):

- Concepten
	- persoon en persoonsrelatie 
	- organisatie en organisatierelatie
	- contactinformatie
	- locatie
	- adres
	- product

</section>

<section>

## Resources

Om all attributen en relaties van een specifiek concept te krijgen, gekenmerkt aan de hand van zijn identifier gebruiken we volgende uri:

	http://{domein}/id/{concept}/{referentie}

Het resultaat van deze vraag is een document beschreven volgens OSLO (RDF of OSLO-XML) dat de beoogde instantie van het concept beschrijft, of derefereert.

Voorbeeld:

Het bevragen van een resource, een ‘READ’ operatie, vertaalt zich bij een REST Service naar een GET request.

	http://example.com/id/organisatie

Vaak zal in de praktijk een resource gekenmerkt worden door een specifiek type 'id' zoals bijvoorbeeld KBO-nummer. Dit is zeker het geval indien meerdere mogelijkheden tot mapping zijn:

	http://example.com/kbo/organisatie

</section>

</section>

<section>

# Namespaces

De namespace van het CORNET vocabularium is:

	http://purl.org/cornet/

<section>

## RDF

Het RDF schema maak optimaal gebruik van bestaande schema’s en vocabularies. Dit is belangrijk zodat toepassingen en andere afgeleide schema’s zo makkelijk gelinkt kunnen worden aan het OSLO RDF-schema zonder dat daarvoor eerst complexe mappings gemaakt moeten worden tussen vocabularies voor courant gebruikte object, types en kenmerken in de beschrijving van de uitgewisselde gegevens. Bovendien garandeert hergebruik van bestaande schema’s compatibiliteit en herkenbaarheid op langere termijn van het OSLO RDF-schema. Een bijkomend voordeel is dat de set eigen definities in het OSLO RDF-schema beperkt blijft zodat deze makkelijk te ondersteunen blijft.

|   Namespace                       |:   Prefix :|          Beheer :|   Domein                   |
|-----------------------------------|-----------|-----------------|----------------------------|
|   http://www.w3.org/ns/org        |     org   |      [W3C GLD](http://www.w3.org/2011/gld/wiki/Main_Page) |   Organisaties             |
|   http://www.w3.org/ns/regorg     |     rov   |         W3C GLD |   Geregistreerde           |
|                                   |           |                 |   Organisaties             |
|   http://www.w3.org/ns/person     |    person |          [ISA](http://joinup.ec.europa.eu/asset/core_person/description) |   Personen                 |
|   http://www.w3.org/ns/locn       |   locn    |   ISA(http://joinup.ec.europa.eu/asset/core_location/home)        |   Locaties                 |
|   http://purl.org/vocab/cpsv      |   cpsv    |   [ISA](http://joinup.ec.europa.eu/asset/core_public_service/home)       |   Publieke dienstverlening |
|   http://purl.org/dc/terms/       |   dcterms |   [DCMA](http://dublincore.org/about/organization/)       |   Metadata                 |
|   http://schema.org/              |   schema  |   ]schema.org](http://schema.org/docs/schemas.html) |   Markup, Metadata         |
|   http://www.w3.org/2006/vcard/ns |   vcard   |   W3C           |   Contactgegevens          |
|   http://www.w3.org/ns/adms       |   adms    |   [WRC GLD](https://dvcs.w3.org/hg/gld/raw-file/default/adms/index.html)    |   Standaarden, Codelijsten |
|                                   |           |                 |   en Taxonomien            |
|   http://www.w3.org/2006/time     |   time    |   [W3C](http://www.w3.org/TR/owl-time/)       |   Tijdsaanduiding          |
|   http://www.w3.org/ns/prov       |   prov    |   [W3C](http://www.w3.org/TR/prov-o/)        |   Herkomst                 |

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
	  shortName:            "cornet-spec",
	  
	  // licensing
	  additionalCopyrightHolders: "CORNET",

	  // if your specification has a subtitle that goes below the main
	  // formal title, define it here
	  // subtitle   :  "an excellent document",

	  // if you wish the publication date to be other than the last modification, set this
	  publishDate:  "2015-02-12",

	  // if the specification's copyright date is a range of years, specify
	  // the start date here:
	  copyrightStart: "2015",

	  // if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
	  // and its maturity status
	  // previousPublishDate:  "1977-03-15",
	  // previousMaturity:  "WD",

	  // if there a publicly available Editor's Draft, this is the link
	  // edDraftURI:           "http://berjon.com/",

	  // if this is a LCWD, uncomment and set the end of its review period
	  // lcEnd: "2009-08-05",

	  // editors, add as many as you like
	  // only "name" is required
	  editors:  [
		  {
	            name:       "Laurens De Vocht"
		  ,   mailto:     "laurens.devocht@ugent.be"
		  ,   company:    "Ghent University - iMinds"
		  ,   companyURL: "http://ugent.be"
		  },
		{
	            name:       "Raf Buyle"
		  ,   mailto:     "raf.buyle@onmicrosoft.be"
		  ,   company:    "Open Knowledge Belgium"
		  ,   companyURL: "http://okfn.be"
		  },
{
	            name:       "Wouter Van den Bosch"
		  ,   mailto:     "wouter.vandenbosch@iminds.be"
		  ,   company:    "iMinds"
		  ,   companyURL: "http://iminds.be"
		  },
{
	            name:       "Bruno Koninckx"
		  ,   mailto:     "bruno.koninckx@thomasmore.be "
		  ,   company:    "Thomase More"
		  ,   companyURL: "http://thomasmore.be"
		  }
	  ],
	  
	  // name of the WG
	  // wg:           "OSLO Werkgroep",
	  
	  // URI of the public WG page
	  // wgURI:        "http://example.org/really-cool-wg",
	  
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

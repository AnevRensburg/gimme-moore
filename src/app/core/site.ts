// Generated from sites/gimme-moore/site.json by make-site.mjs.
import { SiteConfig } from './site.model';

export const SITE: SiteConfig = {
  "name": "Gimme Moore",
  "tagline": "Artisanal chutneys & pantry products, Gordon’s Bay",
  "logo": "logo",
  "meta": {
    "title": "Gimme Moore | Artisanal chutneys and pantry products, Gordon’s Bay",
    "description": "Gluten and preservative free chutneys and pantry products, handmade in small batches from locally sourced ingredients in Gordon’s Bay."
  },
  "hero": {
    "eyebrow": "Gordon’s Bay · Small batch",
    "title": "Chutneys with a story.",
    "lead": "Gluten and preservative free pantry products, handmade in small batches from locally sourced ingredients: biltong chutney, bacon chutneys and more.",
    "image": "hero",
    "imageAlt": "Jars of Gimme Moore biltong, jalapeño pesto and onion marmalade",
    "cta": "See the range"
  },
  "highlights": [
    {
      "icon": "leaf",
      "title": "Gluten & preservative free",
      "text": "Pantry products you can feel good about."
    },
    {
      "icon": "hand",
      "title": "Small batch",
      "text": "Handmade from locally sourced ingredients."
    },
    {
      "icon": "truck",
      "title": "Delivery & collection",
      "text": "Delivery or roadside collection."
    },
    {
      "icon": "tools",
      "title": "White label",
      "text": "Bespoke white-label and product development."
    }
  ],
  "products": {
    "eyebrow": "The pantry",
    "title": "Chutneys & more",
    "lead": "Add your jars to the order. We’ll confirm availability, delivery and collection.",
    "items": [
      {
        "id": "biltong",
        "name": "Biltong chutney",
        "description": "A rich chutney packed with biltong, perfect on a burger or a cheese board. R65 each, or 2 for R110.",
        "image": "biltong",
        "imageAlt": "A jar of Gimme Moore biltong chutney with a burger",
        "options": [
          {
            "label": "1 jar",
            "price": 65
          },
          {
            "label": "2 jars",
            "price": 110
          }
        ],
        "badge": "Favourite"
      },
      {
        "id": "bacononion",
        "name": "Bacon & caramelised onion chutney",
        "description": "Smoky bacon and sweet caramelised onion in a jar.",
        "image": "bacononion",
        "imageAlt": "A jar of bacon and caramelised onion chutney",
        "options": [
          {
            "label": "",
            "price": null
          }
        ]
      },
      {
        "id": "baconrosemary",
        "name": "Bacon, rosemary & pinotage chutney",
        "description": "Bacon and rosemary with a splash of pinotage.",
        "image": "baconrosemary",
        "imageAlt": "Jars of bacon, rosemary and pinotage chutney",
        "options": [
          {
            "label": "",
            "price": null
          }
        ]
      },
      {
        "id": "pesto",
        "name": "Pesto, marmalade & more",
        "description": "Jalapeño pesto, onion and jalapeño marmalade and other pantry jars from the range.",
        "image": "pesto",
        "imageAlt": "A jar of chutney beside onion and bacon",
        "options": [
          {
            "label": "",
            "price": null
          }
        ]
      },
      {
        "id": "gift",
        "name": "Gift boxes",
        "description": "Gift boxes of chutneys, biltong and treats for the occasion, like our Father’s Day boxes.",
        "image": "gift",
        "imageAlt": "A Father’s Day gift box with chutneys and biltong",
        "options": [
          {
            "label": "",
            "price": null
          }
        ]
      }
    ]
  },
  "story": {
    "eyebrow": "About us",
    "title": "Handmade in small batches",
    "paragraphs": [
      "Gimme Moore is an artisanal kitchen in Gordon’s Bay. Our pantry products are gluten and preservative free and handmade in small batches from locally sourced ingredients.",
      "We also offer bespoke white-label services and product development for other food businesses. Find us at winter markets and local deliveries."
    ],
    "image": "story",
    "imageAlt": "A Gimme Moore stall on a market table"
  },
  "gallery": [
    {
      "image": "g1",
      "alt": "The Uitsig Winter Market banner"
    },
    {
      "image": "g2",
      "alt": "Shelves of Gimme Moore jars"
    },
    {
      "image": "g3",
      "alt": "A Gimme Moore chutney with a pie"
    },
    {
      "image": "g4",
      "alt": "An All Star Winter Market poster"
    }
  ],
  "order": {
    "title": "Place your order",
    "lead": "Add what you’d like above, fill in your details and the order opens in your email app, ready to send.",
    "steps": [
      "Choose your products above.",
      "Fill in your details and press Send.",
      "We reply to confirm, with payment details.",
      "Collect, or we arrange delivery."
    ],
    "deliveryOptions": [
      {
        "id": "deliver",
        "label": "Deliver to me",
        "note": "We confirm the delivery cost",
        "needsAddress": true
      },
      {
        "id": "collect",
        "label": "Roadside collection",
        "note": "We’ll send you the collection details",
        "needsAddress": false
      }
    ],
    "notes": [
      "Ask about delivery or roadside collection.",
      "Need white label or product development? Tell us in your message."
    ]
  },
  "faq": [
    {
      "q": "Are your products gluten free?",
      "a": "Yes, our pantry products are gluten and preservative free."
    },
    {
      "q": "Do you deliver?",
      "a": "Yes, we offer delivery and roadside collection."
    },
    {
      "q": "Do you do white label?",
      "a": "Yes, bespoke white-label services and product development."
    }
  ],
  "contact": {
    "email": "gimmemoores@gmail.com",
    "phoneDisplay": "060 731 3288",
    "whatsapp": "27607313288",
    "address": [
      "Gordon’s Bay",
      "Western Cape"
    ],
    "hours": [],
    "socials": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/profile.php?id=911410542258535"
      }
    ]
  },
  "slug": "gimme-moore"
};

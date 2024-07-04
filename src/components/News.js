import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": "Doric Sam",
      "title": "Steph Curry Honors Klay Thompson's Warriors Run, Shares Photos: 'Splash Bros 4 Life' - Bleacher Report",
      "description": "After Klay Thomspon agreed to depart the Golden State Warriors and join the Dallas Mavericks, his longtime teammate Stephen Curry paid tribute to him on…",
      "url": "https://bleacherreport.com/articles/10126960-steph-curry-honors-klay-thompsons-warriors-run-shares-photos-splash-bros-4-life",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1719939575/aolsemphnbubil6dqqu1.jpg",
      "publishedAt": "2024-07-02T17:48:45Z",
      "content": "Noah Graham/NBAE via Getty Images\r\nAfter Klay Thomspon agreed to depart the Golden State Warriors and join the Dallas Mavericks, his longtime teammate Stephen Curry paid tribute to him on social medi… [+1923 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Sandee LaMotte",
      "title": "Some antidepressants contribute to weight gain more than others, study finds - CNN",
      "description": "Weight gain can be a side effect of antidepressants for some people. Here is how much weight you might gain on each of eight common antidepressants.",
      "url": "https://www.cnn.com/2024/07/02/health/weight-gain-antidepressants-wellness/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-3123241.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-07-02T17:45:00Z",
      "content": "Get inspired by a weekly roundup on living well, made simple. Sign up for CNNs Life, But Better newsletter for information and tools designed to improve your well-being.\r\nAntidepressants can be lifes… [+6357 chars]"
    },
    {
      "source": { "id": null, "name": "The Weather Channel" },
      "author": "The Weather Channel",
      "title": "Hurricane Beryl Heads Toward Jamaica Wednesday | Weather.com - The Weather Channel",
      "description": "Beryl has already shattered early-season records. Here's the latest forecast on what still lies ahead.",
      "url": "https://weather.com/storms/hurricane/news/2024-07-02-hurricane-beryl-forecast-jamaica-mexico-texas",
      "urlToImage": "https://s.w-x.co/0702_2pmBeryl.png",
      "publishedAt": "2024-07-02T17:35:00Z",
      "content": "At a Glance\r\n<ul><li>Hurricane Beryl became the earliest Atlantic Category 5 overnight after hammering the Windard Islands Monday.</li><li>It's a danger to Jamaica, the Cayman Islands and Mexico's Yu… [+6058 chars]"
    },
    {
      "source": { "id": null, "name": "PEOPLE" },
      "author": "https://www.facebook.com/peoplemag",
      "title": "After Vulgar Testimony, Lead Investigator in Karen Read Case Is 'Relieved of Duty' After Mistrial - PEOPLE",
      "description": "In text messages State Police Trooper Michael Proctor was made to read on the stand, he called Read “a wack job” and said he hoped she would kill herself",
      "url": "https://people.com/after-vulgar-testimony-lead-investigator-karen-read-case-relieved-of-duty-after-mistrial-8672688",
      "urlToImage": "https://people.com/thmb/Tg3-TNXUSkaau1yEGiPZKs7X9sI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(750x185:752x187)/karen-read-michael-proctor-tout-070224-4a38ec6333ae41edbc364951ecbb163d.jpg",
      "publishedAt": "2024-07-02T17:24:24Z",
      "content": "The lead investigator in the Karen Read case whose degrading and inflammatory text messages about her came to light during the high-profile trial has been relieved of his duties, state officials anno… [+3347 chars]"
    },
    {
      "source": { "id": "associated-press", "name": "Associated Press" },
      "author": "FARNOUSH AMIRI",
      "title": "Rep. Lloyd Doggett is first Democrat to publicly call for Biden to step down as party's nominee - The Associated Press",
      "description": "A House Democratic lawmaker has become the first in the party to publicly call for President Joe Biden to step down as the Democratic nominee for president, citing Biden’s debate performance against Donald Trump failing to “effectively defend his many accompl…",
      "url": "https://apnews.com/article/biden-doggett-2024-election-98c3bd8c4138245e7ef8f79d621268e8",
      "urlToImage": "https://dims.apnews.com/dims4/default/c3f47fd/2147483647/strip/true/crop/1529x860+0+79/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa4%2Ff7%2F433ad6c6b8d86faecb2086dbdfd9%2Ff3fe226cf4f3483fa0a2a81fce6ec39a",
      "publishedAt": "2024-07-02T17:14:21Z",
      "content": "WASHINGTON (AP) A House Democratic lawmaker has become the first in the party to publicly call for President Joe Biden to step down as the partys nominee for president, citing Bidens debate performan… [+5011 chars]"
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": "BBC.com",
      "title": "Hathras crush: More than 100 killed at religious event in India - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jdjJnN3dnajgzbm_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvY3YyZzd3Z2o4M25vLmFtcA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-07-02T17:06:39Z",
      "content": null
    },
    {
      "source": { "id": "the-hill", "name": "The Hill" },
      "author": "Lauren Sforza",
      "title": "Florida officials issue dengue fever alert - The Hill",
      "description": "Local health officials have issued a dengue fever alert in the Florida Keys after discovering two cases were locally acquired. The Florida Health Department issued the mosquito-borne illness alert in Monroe County, where officials said there have been two rep…",
      "url": "https://thehill.com/policy/healthcare/4751865-florida-dengue-fever-alert/",
      "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/11/AP23251815794524-e1699671746250.jpg?w=1280",
      "publishedAt": "2024-07-02T16:40:00Z",
      "content": "Skip to content\r\nLocal health officials have issued a dengue fever alert in the Florida Keys after discovering two cases were locally acquired.\r\nThe Florida Health Department issued the mosquito-born… [+1751 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": "Balazs Koranyi, Howard Schneider",
      "title": "Fed's Powell says US on 'disinflationary path,' but more data needed before rate cuts - Reuters",
      "description": "The U.S. is back on a \"disinflationary path,\" Federal Reserve Chair Jerome Powell said on Tuesday, but policymakers need more data before cutting interest rates to verify that recent weaker inflation readings provide an accurate picture of the economy.",
      "url": "https://www.reuters.com/markets/us/feds-powell-says-more-evidence-falling-inflation-needed-before-rate-cuts-2024-07-02/",
      "urlToImage": "https://www.reuters.com/resizer/v2/CC56DSFCGRK63CZWJ22EM4RQZY.jpg?auth=e4b99396c70d92745a2fe57d5b5e0c63174aafc739f399667f064d65c39324e6&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-07-02T16:18:00Z",
      "content": null
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": "Reuters",
      "title": "Bird flu concern prompts US to award Moderna $176 million for vaccine development - Reuters",
      "description": null,
      "url": "https://www.reuters.com/business/healthcare-pharmaceuticals/us-awards-moderna-176-million-produce-bird-flu-vaccine-2024-07-02/",
      "urlToImage": null,
      "publishedAt": "2024-07-02T16:01:00Z",
      "content": null
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Paula Reid, Lauren del Valle, Kara Scannell, Jeremy Herb",
      "title": "Manhattan DA is open to delaying Trump’s sentencing date in hush money conviction after Supreme Court ruling - CNN",
      "description": "Donald Trump will not be sentenced on his business fraud conviction until September, a New York judge ruled Tuesday in the wake of Monday’s Supreme Court decision on presidential immunity.",
      "url": "https://www.cnn.com/2024/07/02/politics/trump-sentencing-date-delay-proposal/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2152361910.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-07-02T15:56:00Z",
      "content": "Donald Trump will not be sentenced on his business fraud conviction until September, a New York judge ruled Tuesday in the wake of Mondays Supreme Court decision on presidential immunity.\r\nThe delay … [+3474 chars]"
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": "ESPN",
      "title": "Sources - Utah State football coach Blake Anderson on leave - ESPN",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMicGh0dHBzOi8vd3d3LmVzcG4uY29tL2NvbGxlZ2UtZm9vdGJhbGwvc3RvcnkvXy9pZC80MDQ4MjExMS9zb3VyY2VzLXV0YWgtc3RhdGUtZm9vdGJhbGwtY29hY2gtYmxha2UtYW5kZXJzb24tbGVhdmXSAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-07-02T15:55:00Z",
      "content": null
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": "POLITICO Europe",
      "title": "Poland's Tusk rails at fractured defense planning in jibe at Germany's Scholz - POLITICO Europe",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LnBvbGl0aWNvLmV1L2FydGljbGUvcG9sYW5kLWRvbmFsZC10dXNrLWdlcm1hbnktb2xhZi1zY2hvbHotZGVmZW5zZS1zcGVuZGluZy1wbGFubmluZy1jb29wZXJhdGlvbi_SAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-07-02T15:52:00Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": "",
      "title": "NBA offseason winners, losers: Warriors' summer hinges on potential trade, OKC goes big, Klay gets fresh start - CBS Sports",
      "description": "Here are the winners and losers of the NBA summer so far with most notable free agents off the board",
      "url": "https://www.cbssports.com/nba/news/nba-offseason-winners-losers-warriors-summer-hinges-on-potential-trade-okc-goes-big-klay-gets-fresh-start/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/07/02/4574f4e1-3516-414f-b503-a3e655bfcba7/thumbnail/1200x675/cb5198420c87d2115d61ecd31d8a2430/curry-getty-2.png",
      "publishedAt": "2024-07-02T15:22:00Z",
      "content": "Paul George is going to Philadelphia. Klay Thompson is going to Dallas. Free agency is more than off and running, it's darn near over with just a few big names still sitting out there. Will DeMar DeR… [+16289 chars]"
    },
    {
      "source": { "id": null, "name": "[Removed]" },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": { "id": null, "name": "Hollywood Reporter" },
      "author": "Chris Gardner",
      "title": "‘MaXXXine’ Star Mia Goth on Toplining Ti West’s Slasher Trilogy: “It Changed Me Forever” - Hollywood Reporter",
      "description": "The London-born actress describes her collaborations with the filmmaker whom she credits for a newfound sense of confidence in her career: \"It didn't feel like I was just a hired gun on a movie set.\"",
      "url": "http://www.hollywoodreporter.com/movies/movie-news/maxxxine-movie-star-mia-goth-ti-west-trilogy-1235937140/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/07/DS1_0165_cxIZZj3Z.jpg?crop=0px%2C665px%2C6192px%2C3465px&resize=1440%2C810",
      "publishedAt": "2024-07-02T15:20:57Z",
      "content": "Much has been made about how filmmaker Ti West has reinvented and refreshed the slasher genre by paying homage to the classics in his A24 trilogy X, Pearl and the upcoming MaXXXine. His leading lady,… [+5267 chars]"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "Aaron Katersky",
      "title": "Rudy Giuliani disbarred over 'false and misleading' statements on 2020 election - ABC News",
      "description": "The former New York City mayor has lost his law license.",
      "url": "https://abcnews.go.com/US/rudy-giuliani-disbarred-false-misleading-statements-2020-election/story?id=111611915",
      "urlToImage": "https://i.abcnewsfe.com/a/d7d09b01-f466-44ed-8027-963e43c59cba/rudy-Giuliani-file-gty-ml-240702_1719933302455_hpMain_16x9.jpg?w=1600",
      "publishedAt": "2024-07-02T15:20:20Z",
      "content": "Rudy Giuliani's association with former President Donald Trump has cost him his law license.\r\nGiuliani was disbarred on Tuesday in a decision handed down by the Appellate Division First Department in… [+1944 chars]"
    },
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": "Jericka Duncan, Kelsie Hoffman",
      "title": "New grand jury transcripts released in Jeffrey Epstein case reveal prosecutors knew about accusations against him - CBS News",
      "description": "The newly-released transcripts from 2006 reveal prosecutors knew about accusations against Jeffrey Epstein years before they cut a deal with the late financier.",
      "url": "https://www.cbsnews.com/news/grand-jury-documents-released-jeffrey-epstein-case/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/01/05/0ed29d7f-2dfd-415b-8222-c258871a7773/thumbnail/1200x630/775b17fa2070782ffbc43d1015c62aa1/cbsn-fusion-legal-analysis-of-the-2nd-batch-of-jeffrey-epstein-docs-thumbnail-2578129-640x360.jpg?v=57e8061b2038d609da26e467de5ddfb8",
      "publishedAt": "2024-07-02T15:09:18Z",
      "content": "A Florida judge on Monday unveiled 150 pages of grand jury transcripts from 2006 that looked into sex trafficking and rape allegations made against financier Jeffrey Epstein. \r\nThe newly released doc… [+3072 chars]"
    },
    {
      "source": { "id": null, "name": "Live Science" },
      "author": "Emily Cooke",
      "title": "Bionic legs plugged directly into nervous system enable unprecedented 'level of brain control' - Livescience.com",
      "description": "A first-of-its-kind study demonstrated that a new nervous system-controlled bionic leg helps leg amputees walk more naturally than traditional prosthesis.",
      "url": "https://www.livescience.com/health/surgery/bionic-legs-plugged-directly-into-nervous-system-enable-unprecedented-level-of-brain-control",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/DPmYE2DCQGez6TDiB8droD-1200-80.jpg",
      "publishedAt": "2024-07-02T14:57:25Z",
      "content": "A pioneering surgical procedure provides amputees with bionic limbs that are directly controlled by the nervous system, enabling patients to sense the limb's position in space. \r\nScientists demonstra… [+3637 chars]"
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Sarah Perez",
      "title": "Figma disables its AI design feature that appeared to be ripping off Apple's Weather app - TechCrunch",
      "description": "The Make Design feature is available within Figma's software and will generate UI (user interface) layouts and components from text prompts.",
      "url": "https://techcrunch.com/2024/07/02/figma-disables-its-ai-design-feature-that-appeared-to-be-ripping-off-apples-weather-app/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/TechCrunch-Disrupt-Haje-Kamps-777.jpg?resize=1200,800",
      "publishedAt": "2024-07-02T14:48:20Z",
      "content": "Figma CEO Dylan Field says the company will temporarily disable its “Make Design” AI feature that was said to be ripping off the designs of Apple’s own Weather app. The problem was first spotted by A… [+3589 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Lucy Letby guilty of trying to kill baby girl | BBC News - BBC News",
      "description": null,
      "url": "https://www.youtube.com/watch?v=2TBj1fL-eK4",
      "urlToImage": null,
      "publishedAt": "2024-07-02T14:41:40Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    }
  ]

    
  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News Honey Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4 my-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

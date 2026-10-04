import cemetery from "@/assets/cemetery.jpg";
import church from "@/assets/church.jpg";
import railway from "@/assets/railway.jpg";
import coalMining from "@/assets/coal-mining.jpg";
import coalfields from "@/assets/coalfields.jpg";
import rajbari from "@/assets/rajbari.jpg";
import damodar from "@/assets/damodar.jpg";
import kalyaneshwari from "@/assets/kalyaneshwari.jpg";
import ghagarBuri from "@/assets/ghagar-buri.jpg";
import biharinath from "@/assets/biharinath.jpg";
import nehruPark from "@/assets/nehru-park.jpg";

export type Section = { title: string; text: string[] };
export type Site = {
  slug: string;
  name: string;
  image: string;
  intro: string;
  sections: Section[];
};

export const sites: Site[] = [
  {
    slug: "raniganj-cemetery",
    name: "Raniganj Cemetery",
    image: cemetery,
    intro: "A 19th-century Christian burial ground that quietly records the colonial-era story of the town.",
    sections: [
      { title: "Description", text: ["Raniganj Cemetery is an old Christian burial ground with weathered tombs, obelisks and memorial stones. Many of the graves are now worn by time, giving the site a calm, reflective atmosphere."] },
      { title: "History", text: ["The cemetery dates to the 19th century, the period when Raniganj grew rapidly as a coal-mining and railway town. It is associated with the European residents who came to work in the mines, railways and trading firms, as well as with the Indian Christian community of the Raniganj area.", "Exact founding dates and the full list of people buried here are not well documented in public sources, so the inscriptions on the surviving stones remain the most direct record."] },
      { title: "Historical Importance", text: ["Colonial cemeteries like this one are physical evidence of who lived and worked in a place. The memorials reflect the engineers, officials, families and local Christians connected with early industrial Bengal."] },
      { title: "Importance to Raniganj", text: ["The cemetery links present-day Raniganj to its beginnings as one of India's first industrial towns. Preserving it helps protect an important chapter of the town's social history."] },
    ],
  },
  {
    slug: "raniganj-wesleyan-church",
    name: "Raniganj Wesleyan Methodist Church",
    image: church,
    intro: "A historic Methodist church connected with the colonial-era growth of Raniganj.",
    sections: [
      { title: "Description", text: ["The Wesleyan Methodist Church is one of the older Christian places of worship in Raniganj. Its simple colonial-style architecture reflects the period in which the town developed."] },
      { title: "History", text: ["Wesleyan Methodist missionaries were active in the Raniganj–Asansol region during British rule, when the coal and railway industries attracted workers and families from many places. The church grew out of this missionary and community presence.", "Precise construction dates are not reliably recorded in widely available sources, so they are not stated here."] },
      { title: "Historical Importance", text: ["The church is part of the religious and educational history of the coal belt. Missions in the area were also associated with schools and social work, contributing to community life."] },
      { title: "Importance to Raniganj", text: ["It remains an active place of worship and a reminder of the town's diverse, multi-faith heritage alongside its temples and mosques."] },
    ],
  },
  {
    slug: "raniganj-railway-heritage",
    name: "Raniganj Railway Heritage",
    image: railway,
    intro: "The railway turned Raniganj's coal into a national resource and the town into a busy commercial centre.",
    sections: [
      { title: "Description", text: ["Raniganj is a station on the historic Howrah–Delhi main line of the Eastern Railway. Today it serves passengers and goods traffic across the coal belt."] },
      { title: "History", text: ["The East Indian Railway line from Howrah was extended to Raniganj in the mid-1850s, making it one of the earliest railheads in eastern India. A key reason for building the line in this direction was to carry Raniganj coal to Calcutta."] },
      { title: "Historical Importance", text: ["Coal from Raniganj fuelled locomotives, steamships and factories. The railway and the coalfield grew together, each depending on the other."] },
      { title: "Importance to Raniganj", text: ["Rail connectivity made Raniganj a trading hub for coal, grain and goods, attracting merchants and workers and shaping the town as it is today."] },
    ],
  },
  {
    slug: "coal-mining-heritage",
    name: "Raniganj Coal Mining Heritage",
    image: coalMining,
    intro: "Raniganj is widely regarded as the birthplace of commercial coal mining in India.",
    sections: [
      { title: "Description", text: ["Old headframes, abandoned shafts and mining colonies across the area are reminders of more than two centuries of coal mining."] },
      { title: "History", text: ["Commercial coal mining in India is generally traced to the Raniganj area in the late 18th century, during East India Company rule. In the 19th century, Indian and European firms expanded mining here significantly, and production grew further after the arrival of the railway."] },
      { title: "Historical Importance", text: ["Raniganj coal supported the early industrialisation of eastern India. The region's mines helped develop techniques, labour systems and businesses that later spread to other coalfields."] },
      { title: "Importance to Raniganj", text: ["Mining created the town's economy, its migrant communities and its identity. Even today, coal remains central to life in Raniganj."] },
    ],
  },
  {
    slug: "raniganj-coalfields",
    name: "Raniganj Coalfields",
    image: coalfields,
    intro: "One of India's oldest and most important coalfields, stretching across the Damodar valley.",
    sections: [
      { title: "Description", text: ["The Raniganj Coalfield lies mainly in Paschim Bardhaman district of West Bengal and extends into neighbouring areas. It includes both underground and open-cast mines, many operated today by Eastern Coalfields Limited."] },
      { title: "Coal Mining & Industrial Development", text: ["The coalfield encouraged the growth of steel, power, cement and other industries in the Asansol–Durgapur region, making it one of the major industrial belts of India."] },
      { title: "Economic Importance", text: ["Coal from the field supplies power stations and industries, and provides employment to a large number of people directly and indirectly."] },
      { title: "Historical Importance", text: ["As the site of India's earliest commercial coal mining, the coalfield holds a special place in the country's industrial history."] },
      { title: "Relationship with the Growth of Raniganj", text: ["The town grew as the service and trading centre of the coalfield. Its markets, railway yards and settlements developed to support mining activity."] },
    ],
  },
  {
    slug: "searsole-rajbari",
    name: "Searsole Rajbari",
    image: rajbari,
    intro: "The ancestral palace of the Searsole zamindar family, near Raniganj.",
    sections: [
      { title: "Description", text: ["Searsole Rajbari is a large old zamindar residence located at Searsole, close to Raniganj. Its courtyards, verandahs and temple areas reflect the lifestyle of a local landed family."] },
      { title: "Historical Background", text: ["The Rajbari was the seat of the Searsole Raj family, landholders of the area during the colonial period. The family is also known for its role in local education and religious festivals, especially Durga Puja.", "The Searsole Raj school is popularly associated with the poet Kazi Nazrul Islam, who studied in the area in his youth."] },
      { title: "Architectural Significance", text: ["The building shows features typical of Bengal zamindar mansions — arched colonnades, inner courtyards and a thakurdalan (worship hall) — blending local and colonial influences."] },
      { title: "Connection with Local History", text: ["The Rajbari represents the pre-industrial and landholding history of the Raniganj area, complementing the town's industrial story."] },
    ],
  },
  {
    slug: "damodar-river",
    name: "Damodar River Heritage",
    image: damodar,
    intro: "The river that shaped settlement, farming and industry around Raniganj.",
    sections: [
      { title: "Description", text: ["The Damodar River flows south of Raniganj through a wide, sandy bed. Its banks offer open views, especially at sunrise and sunset."] },
      { title: "Historical & Local Importance", text: ["Once known for its floods, the Damodar was later managed through the Damodar Valley Corporation projects after Independence. The river has long supported agriculture and local livelihoods."] },
      { title: "Relationship with Settlement & Industry", text: ["The coal-bearing rocks of the region form part of the Damodar valley. River water supports towns, power plants and industries across the belt."] },
      { title: "Tourism Significance", text: ["The riverbanks near Raniganj are popular for quiet walks, picnics and photography, especially during winter."] },
    ],
  },
  {
    slug: "kalyaneshwari-temple",
    name: "Kalyaneshwari Temple",
    image: kalyaneshwari,
    intro: "A revered Shakti temple on the banks of the Barakar, visited by pilgrims from across the region.",
    sections: [
      { title: "Description", text: ["Kalyaneshwari Temple is located near Maithon in Paschim Bardhaman district, a short journey from Raniganj. The temple is dedicated to the goddess Kalyaneshwari, a form of the Mother Goddess."] },
      { title: "History & Traditional Significance", text: ["According to local tradition the temple is several centuries old. Many legends are associated with it, though exact historical dates are not firmly established."] },
      { title: "Religious Importance", text: ["Devotees, especially women, visit to pray for blessings and the welfare of their families. Special crowds gather during festivals and on auspicious days."] },
      { title: "Tourism Importance", text: ["Combined with nearby Maithon Dam, the temple is one of the most visited religious and leisure destinations for people living in and around Raniganj."] },
    ],
  },
  {
    slug: "ghagar-buri-chandi-temple",
    name: "Ghagar Buri Chandi Temple",
    image: ghagarBuri,
    intro: "An old and much-loved temple of Goddess Chandi near Asansol, close to Raniganj.",
    sections: [
      { title: "Description", text: ["Ghagar Buri Chandi Temple stands near the Nunia stream on the outskirts of Asansol. It is a modest temple that attracts large numbers of devotees."] },
      { title: "Historical & Traditional Significance", text: ["The temple is believed to be centuries old and is considered one of the oldest places of worship in the Asansol–Raniganj area. Its origin is explained through local legends rather than written records."] },
      { title: "Religious Importance", text: ["Goddess Chandi is worshipped here as a protective deity. A large fair is traditionally held around the Bengali month of Magh, drawing visitors from nearby towns and villages."] },
      { title: "Tourism Importance", text: ["The temple is an important stop for visitors interested in the living religious traditions of the coal belt."] },
    ],
  },
  {
    slug: "biharinath-hill",
    name: "Biharinath Hill",
    image: biharinath,
    intro: "A green, forested hill across the Damodar, often called the highest hill of Bankura district.",
    sections: [
      { title: "Description", text: ["Biharinath Hill lies in Bankura district, on the other side of the Damodar from Raniganj. A small lake and a temple at its foot make it a peaceful getaway."] },
      { title: "Historical & Cultural Significance", text: ["A Shiva temple at the base of the hill is an important local place of worship. Some sources also link the area with older Jain traditions."] },
      { title: "Natural Importance", text: ["The hill is covered with mixed forest and supports birdlife and local flora, a contrast to the mining landscape nearby."] },
      { title: "Tourism Importance", text: ["Biharinath is a favourite weekend destination for trekking, picnics and photography for people from Raniganj, Asansol and Durgapur."] },
    ],
  },
  {
    slug: "nehru-park",
    name: "Nehru Park / Raniganj Local Heritage",
    image: nehruPark,
    intro: "A local green space for recreation, alongside the town's everyday heritage.",
    sections: [
      { title: "Description", text: ["Nehru Park is a public park in Raniganj with lawns, paths and seating, used by families for walks, play and relaxation."] },
      { title: "Modern Recreational Importance", text: ["The park is a modern recreational space rather than a historic monument. Its value lies in offering residents fresh air and a community gathering place in a busy industrial town."] },
      { title: "Older Local Heritage", text: ["Raniganj's older heritage is found elsewhere in town — in its old markets, merchant houses, places of worship, colonial buildings and railway area. These reflect the town's long history as a trading and mining centre."] },
      { title: "Importance to Raniganj", text: ["Together, everyday spaces like Nehru Park and the town's historic streets show how Raniganj balances its past with present-day community life."] },
    ],
  },
];

export const getSite = (slug: string) => sites.find((s) => s.slug === slug)!;

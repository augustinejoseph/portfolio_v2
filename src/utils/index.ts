import { LINKS } from "@/lib/constants";

export function getDescriptionFromHtml(htmlString: any, wordLimit = 100) {
  // Step 1: Remove HTML tags using a regex
  const strippedText = htmlString.replace(/<\/?[^>]+(>|$)/g, ""); // Strips HTML tags

  // Step 2: Split the text into words and limit to the first `wordLimit` words
  const words = strippedText.split(/\s+/).slice(0, wordLimit);

  // Step 3: Join the words back into a string and return the result
  return words.join(" ") + (words.length === wordLimit ? "..." : "");
}

export async function fetchArticles() {

    try {
      const res = await fetch(LINKS.MEDIUM);
      if (!res.ok) {
        throw new Error("Failed to fetch articles");
      }
      const mediumArticles = await res.json();    
      return mediumArticles.items;
    } catch (error) {
      console.error("Error fetching articles:", error);
      return [];
    }
  }
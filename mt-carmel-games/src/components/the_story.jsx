import { useEffect } from "react";
import ReactGA from "react-ga4";
import "../css/the_story.css";

export default function TheStory() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <>
      <h2>1 Kings 18 (NIV):</h2>
      <div className="text">
        <span className="verse-num first">20</span>So Ahab sent word throughout all Israel and assembled the prophets on Mount Carmel.
        <span className="verse-num">21</span>Elijah went before the people and said, “How long will you waver between two opinions? If the Lord is God, follow him; but if Baal is God, follow him.” But the people said nothing.
        <span className="verse-num">22</span>Then Elijah said to them, “I am the only one of the Lord’s prophets left, but Baal has four hundred and fifty prophets.
        <span className="verse-num">23</span>Get two bulls for us. Let Baal’s prophets choose one for themselves, and let them cut it into pieces and put it on the wood but not set fire to it. I will prepare the other bull and put it on the wood but not set fire to it.
        <span className="verse-num">24</span>Then you call on the name of your god, and I will call on the name of the Lord. The god who answers by fire—he is God.” Then all the people said, “What you say is good.”
        <span className="verse-num">25</span>Elijah said to the prophets of Baal, “Choose one of the bulls and prepare it first, since there are so many of you. Call on the name of your god, but do not light the fire.”
        <span className="verse-num">26</span>So they took the bull given them and prepared it. Then they called on the name of Baal from morning till noon. “Baal, answer us!” they shouted. But there was no response; no one answered. And they danced around the altar they had made.
        <span className="verse-num">27</span>At noon Elijah began to taunt them. “Shout louder!” he said. “Surely he is a god! Perhaps he is deep in thought, or busy, or traveling. Maybe he is sleeping and must be awakened.”
        <span className="verse-num">28</span>So they shouted louder and slashed themselves with swords and spears, as was their custom, until their blood flowed.
        <span className="verse-num">29</span>Midday passed, and they continued their frantic prophesying until the time for the evening sacrifice. But there was no response, no one answered, no one paid attention.
        <span className="verse-num">30</span>Then Elijah said to all the people, “Come here to me.” They came to him, and he repaired the altar of the Lord, which had been torn down.
        <span className="verse-num">31</span>Elijah took twelve stones, one for each of the tribes descended from Jacob, to whom the word of the Lord had come, saying, “Your name shall be Israel.”
        <span className="verse-num">32</span>With the stones he built an altar in the name of the Lord, and he dug a trench around it large enough to hold two seahs[a] of seed.
        <span className="verse-num">33</span>He arranged the wood, cut the bull into pieces and laid it on the wood. Then he said to them, “Fill four large jars with water and pour it on the offering and on the wood.”
        <span className="verse-num">34</span>“Do it again,” he said, and they did it again. “Do it a third time,” he ordered, and they did it the third time.
        <span className="verse-num">35</span>The water ran down around the altar and even filled the trench.
        <span className="verse-num">36</span>At the time of sacrifice, the prophet Elijah stepped forward and prayed: “Lord, the God of Abraham, Isaac and Israel, let it be known today that you are God in Israel and that I am your servant and have done all these things at your command.
        <span className="verse-num">37</span>Answer me, Lord, answer me, so these people will know that you, Lord, are God, and that you are turning their hearts back again.”
        <span className="verse-num">38</span>Then the fire of the Lord fell and burned up the sacrifice, the wood, the stones and the soil, and also licked up the water in the trench.
        <span className="verse-num">39</span>When all the people saw this, they fell prostrate and cried, “The Lord—he is God! The Lord—he is God!”
        <span className="verse-num">40</span>Then Elijah commanded them, “Seize the prophets of Baal. Don’t let anyone get away!” They seized them, and Elijah had them brought down to the Kishon Valley and slaughtered there.
      </div>
    </>
  );
}

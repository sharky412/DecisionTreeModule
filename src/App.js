import React, { useState } from 'react';
import './DecisionTree.css';

const DecisionTreeLearning = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPath, setSelectedPath] = useState([]);

  const story = [
    {
      title: "Welcome to Mr. Shardul's Decision Tree Adventure!",
      content: "Hey there! 👋 I'm Shardul, and today we're going to learn something super cool. Have you ever felt stuck making a choice? Well, we've got a magical tool called a Decision Tree that can help!"
    },
    {
      title: "What is a Decision Tree?",
      content: "Imagine you're playing a game where each choice leads to a new adventure. That's exactly what a Decision Tree is! It's like a tree where each branch is a different choice, and each choice leads us to new possibilities. I will help us understand how to use it! 🌳"
    },
    {
      title: "Real-Life Decision Trees",
      content: "Decision trees are everywhere! When you choose what to wear based on the weather, or when you pick what to eat for lunch - you're using a decision tree in your mind. Even video games use decision trees to decide what happens next in the story! 🎮"
    },
    {
      title: "Welcome to the Adventure!",
      content: "Once upon a time, there was a curious adventurer named Alex. Alex loved exploring new places, meeting interesting people, and discovering hidden treasures. One day, Alex received a mysterious letter that invited them to an epic journey. Will you help Alex decide what to do next?"
    },
    {
      title: "The Invitation",
      content: "The letter reads: 'Dear Alex, your adventure begins now. Choose wisely, for every decision will shape the path ahead. Start by deciding where to begin your journey. Choose wisely, and may your courage guide you!' With this, Alex stands at a crossroads. Which direction should they take?"
    },
    {
      title: "The First Choice",
      content: "At the crossroads, Alex sees three paths: one leading into a dark forest, one leading to a mountain range, and the third towards a sparkling river. Each path holds its own mystery, but Alex must decide where to go first. What should Alex choose?"
    },
    {
      title: "The Journey Begins",
      content: "Alex steps forward, ready to make their decision. But this journey isn't easy, and each choice leads to different experiences. Will you help Alex make the right choices and guide them through this adventure? Each decision will bring new challenges and discoveries!"
    },
    {
      title: "Let's Begin Our Adventure!",
      content: "Now, it's time for you to help Alex make the choices that will lead to an exciting adventure. The journey is full of twists and turns, and every decision is important. Are you ready? Let's make our first choice together!"
    }
  ];

  const getNextChoices = (currentPath) => {
    if (currentPath.length === 0) {
      return {
        question: "Which path should Alex take first?",
        choices: [
          { value: 'forest', label: 'The Dark Forest 🌲' },
          { value: 'mountain', label: 'The Majestic Mountains 🏔️' },
          { value: 'river', label: 'The Sparkling River 🌊' }
        ]
      };
    }

    if (currentPath.length === 1) {
      const adventureChoice = {
        forest: {
          question: "In the forest, Alex encounters a mysterious figure. Should they approach or stay hidden?",
          choices: [
            { value: 'approach', label: 'Approach the figure 👤' },
            { value: 'hide', label: 'Stay hidden 🌳' }
          ]
        },
        mountain: {
          question: "At the foot of the mountains, Alex must choose to climb a steep trail or take a safer path around the base.",
          choices: [
            { value: 'climb', label: 'Climb the steep trail 🧗‍♂️' },
            { value: 'around', label: 'Take the safer path 🏞️' }
          ]
        },
        river: {
          question: "At the river, Alex sees a boat and a bridge. Should they cross the river by boat or walk across the bridge?",
          choices: [
            { value: 'boat', label: 'Take the boat 🚤' },
            { value: 'bridge', label: 'Walk across the bridge 🌉' }
          ]
        }
      };
      return adventureChoice[currentPath[0]];
    }

    if (currentPath.length === 2) {
      const secondLevelChoices = {
        forest: {
          approach: {
            question: "The figure turns out to be a wise old sage. Should Alex ask for guidance or continue on their own?",
            choices: [
              { value: 'ask', label: 'Ask for guidance 🙋‍♂️' },
              { value: 'continue', label: 'Continue alone 🏞️' }
            ]
          },
          hide: {
            question: "While hidden, Alex spots a treasure chest. Should they approach it or keep moving?",
            choices: [
              { value: 'approach', label: 'Approach the chest 💎' },
              { value: 'move', label: 'Keep moving forward 🛤️' }
            ]
          }
        },
        mountain: {
          climb: {
            question: "The trail is difficult, but Alex reaches the summit and finds a map. Should they study the map or head back?",
            choices: [
              { value: 'study', label: 'Study the map 📜' },
              { value: 'back', label: 'Head back to the base 🏞️' }
            ]
          },
          around: {
            question: "Taking the safer path, Alex discovers a hidden village. Should they visit or keep walking?",
            choices: [
              { value: 'visit', label: 'Visit the village 🏘️' },
              { value: 'walk', label: 'Keep walking 🛤️' }
            ]
          }
        },
        river: {
          boat: {
            question: "The boat is old and creaky. Should Alex trust it and cross or wait for a better option?",
            choices: [
              { value: 'trust', label: 'Trust the boat 🚤' },
              { value: 'wait', label: 'Wait for a better option ⏳' }
            ]
          },
          bridge: {
            question: "The bridge is unstable. Should Alex cross carefully or find another way?",
            choices: [
              { value: 'careful', label: 'Cross carefully 🐢' },
              { value: 'find', label: 'Find another way 🔍' }
            ]
          }
        }
      };
      return secondLevelChoices[currentPath[0]][currentPath[1]];
    }
  };

  const getFinalDecision = (path) => {
    const decisions = {
      forest: {
        approach: {
          ask: "The sage offers valuable advice and a magical item to aid Alex on their journey. The adventure continues with new insights!",
          continue: "Alex decides to continue on their own, only to face a difficult challenge ahead. The path is uncertain, but Alex is brave!"
        },
        hide: {
          approach: "The chest is filled with gold and treasures. Alex takes the riches and continues the journey with a newfound fortune.",
          move: "Alex leaves the chest behind and ventures deeper into the forest, where they encounter new mysteries."
        }
      },
      mountain: {
        climb: {
          study: "The map reveals a hidden cave with treasures! Alex ventures inside and uncovers a long-lost secret.",
          back: "Alex returns to the base, choosing to head in a new direction. The journey continues elsewhere."
        },
        around: {
          visit: "The village offers warm hospitality and food. Alex learns about an ancient quest that could change everything.",
          walk: "Alex moves on, finding new surprises in the wilderness ahead."
        }
      },
      river: {
        boat: {
          trust: "The boat crosses the river safely, and Alex discovers an ancient temple hidden across the water. The adventure grows more thrilling!",
          wait: "Waiting for a better option, Alex learns about a storm approaching, and must quickly decide how to continue."
        },
        bridge: {
          careful: "Alex crosses the unstable bridge slowly but safely, discovering a hidden path on the other side that leads to more challenges.",
          find: "Finding another way, Alex discovers a beautiful forest that holds both danger and mystery."
        }
      }
    };
    return decisions[path[0]][path[1]][path[2]];
  };

  const makeDecision = (choice) => {
    setSelectedPath([...selectedPath, choice]);
  };

  const resetDecisions = () => {
    setSelectedPath([]);
  };

  return (
    <div className="decision-tree-container">
      {/* Story Section */}
      <div className="story-card">
        <div className="story-content">
          <h2 className="story-title">
            {story[currentStep].title}
          </h2>
          <p className="story-text">{story[currentStep].content}</p>
          <div className="button-container">
            <button 
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="nav-button"
            >
              ⬅️ Previous
            </button>
            <button 
              onClick={() => setCurrentStep(Math.min(story.length - 1, currentStep + 1))}
              disabled={currentStep === story.length - 1}
              className="nav-button"
            >
              Next ➡️
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Tree Section */}
      {currentStep === 7 && (
        <div className="tree-section">
          <div className="tree-header">
            <h2 className="tree-title">
              🌳 Alex's Adventure Awaits!
            </h2>
          </div>
          <div className="tree-content">
            {selectedPath.length < 3 && (
              <div className="decision-node">
                <p className="node-question">{getNextChoices(selectedPath).question}</p>
                <div className="choice-buttons">
                  {getNextChoices(selectedPath).choices.map((choice) => (
                    <button 
                      key={choice.value}
                      onClick={() => makeDecision(choice.value)}
                      className="choice-button"
                    >
                      {choice.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedPath.length === 3 && (
              <div className="final-decision">
                <p className="decision-result">
                  {getFinalDecision(selectedPath)}
                </p>
                <button 
                  onClick={resetDecisions}
                  className="reset-button"
                >
                  Try Another Adventure 🔄
                </button>
              </div>
            )}

            {selectedPath.length > 0 && (
              <div className="path-display">
                <p>Your choices: {selectedPath.map((choice, index) => (
                  <span key={index} className="choice-tag">{choice}</span>
                ))}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DecisionTreeLearning;

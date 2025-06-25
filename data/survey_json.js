export const json = {
  "locale": "zh-tw",
  "title": {
    "default": "Northwick Park Neck Pain Questionnaire",
    "zh-tw": "頸痛問卷"
  },
  "description": {
    "default": "The questionnaire has been designed to give us information as to how your NECK PAIN has affected your ability to manage in everyday life. Please answer every question and mark in each section ONLY THE ONE BOX which applies to you. We realize you may consider that two of the statements in any one section relates to you but PLEASE\n\nJUST MARK THE BOX WHICH MOST CLOSELY DESCRIBES YOUR PROBLM.",
    "zh-tw": "我們設計本問卷的目的，是了解頸痛如何影響你應付日常生活的能力。\n\n請回答每一個部分的問題，並在一個適用的選項內標示你的答案。你也許會發現在同一部分內有兩種描述都適用於你， 但請你也只選擇一個選項，而這答案必須最貼切地描述你的問題。\n\n請記住：你只需在每個部分選擇一個選項。"
  },
  "pages": [
    {
      "name": "page2",
      "elements": [
        {
          "type": "radiogroup",
          "name": "q1",
          "title": {
            "zh-tw": "1. 現在頸痛的程度",
            "default": "1. Neck Pain Intensity"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": {
                "zh-tw": "沒有頸痛",
                "default": "I have no pain at the moment."
              }
            },
            {
              "value": "1",
              "text": {
                "zh-tw": "溫和",
                "default": "The pain is mild at the moment."
              }
            },
            {
              "value": "2",
              "text": {
                "zh-tw": "中等",
                "default": "The pain is moderate at the moment."
              }
            },
            {
              "value": "3",
              "text": {
                "zh-tw": "很厲害",
                "default": "The pain is severe at the moment."
              }
            },
            {
              "value": "4",
              "text": {
                "zh-tw": "簡直不可想像",
                "default": "The pain is the worst imaginable at the moment."
              }
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q2",
          "title": {
            "zh-tw": "2. 頸痛與睡眠",
            "default": "2. Neck Pain and Sleeping"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": {
                "zh-tw": "頸痛從不干擾我睡眠",
                "default": "My sleep is never disturbed by pain."
              }
            },
            {
              "value": "1",
              "text": {
                "zh-tw": "頸痛有時會干擾我睡眠",
                "default": "My sleep is occasionally disturbed by pain."
              }
            },
            {
              "value": "2",
              "text": {
                "zh-tw": "頸痛經常會干擾我睡眠",
                "default": "My sleep is regularly disturbed by pain."
              }
            },
            {
              "value": "3",
              "text": {
                "zh-tw": "頸痛使我每晚的睡眠時間少過五小時",
                "default": "Because of pain I have less than 5 hours sleep in total."
              }
            },
            {
              "value": "4",
              "text": {
                "zh-tw": "頸痛使我每晚的睡眠時間少過兩小時",
                "default": "Because of pain I have less than 2 hours sleep in total."
              }
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q3",
          "title": {
            "zh-tw": "3. 手臂在夜晚感到發麻或針刺般的情況",
            "default": "3. Pins and Needles or Numbness at night"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": {
                "zh-tw": "我在夜晚並不感到手臂發麻或有針刺般的感覺",
                "default": "I have no pins and needles or numbness at night."
              }
            },
            {
              "value": "1",
              "text": {
                "zh-tw": "我有時會在夜晚覺得手臂發麻或有針刺般的感覺",
                "default": "I have occasional pins and needles or numbness at night."
              }
            },
            {
              "value": "2",
              "text": {
                "zh-tw": "手臂在夜晚發麻或針刺般的感覺，經常打擾我睡眠",
                "default": "My sleep is regularly disturbed by pins and needles or numbness."
              }
            },
            {
              "value": "3",
              "text": {
                "zh-tw": "手臂在夜脕發麻或針刺般的感覺，使我每晚的睡眠時間少過五小時",
                "default": "Because of pins and needles I have less than 5 hours sleep in total."
              }
            },
            {
              "value": "4",
              "text": {
                "zh-tw": "我的手臂發麻或針刺般的感覺，使我每脕的睡眠時間少於兩小時",
                "default": "Because of pins and needles or numbness I have less than 2 hours sleep in total."
              }
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q4",
          "title": {
            "zh-tw": "4. 每天症狀持續的時間",
            "default": "4. Duration of symptoms"
          },
          "choices": [
            {
              "value": "0",
              "text": {
                "zh-tw": "我的頸部和手臂整天都覺得正常",
                "default": "My neck and arms feel normally all day."
              }
            },
            {
              "value": "1",
              "text": {
                "zh-tw": "我起床時會覺得頸部和手臂有不適的症狀，但不超過一小時",
                "default": "I have symptoms in my neck or arms on waking which last less than 1 hour."
              }
            },
            {
              "value": "2",
              "text": {
                "zh-tw": "頸部和手臂不適的症狀時有時無，總共持續一至四小時",
                "default": "Symptoms are present on and off for a total period of 1-4 hours."
              }
            },
            {
              "value": "3",
              "text": {
                "zh-tw": "頸部和手臂不適的症狀時有時無，總共持續超過四小時",
                "default": "Symptoms are present on and off for a total of more than 4 hours."
              }
            },
            {
              "value": "4",
              "text": {
                "zh-tw": "頸部和手臂不適的症狀持續不斷，整天都有",
                "default": "Symptoms are present continuously all day."
              }
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q5",
          "title": {
            "zh-tw": "5. 攜帶物件",
            "default": "5. Carrying"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": {
                "zh-tw": "我可攜帶重物(5公斤或以上)而不感到額外的痛楚",
                "default": "I can carry heavy object without extra pain."
              }
            },
            {
              "value": "1",
              "text": {
                "zh-tw": "我可攜帶重物(5公斤或以上)，但這令我感到額外的痛楚",
                "default": "I can carry heavy object but they give me extra pain."
              }
            },
            {
              "value": "2",
              "text": {
                "zh-tw": "痛楚令我不能攜帶重物，但若物件的重量中等(約2-3公斤)，我便可以應付",
                "default": "Pain prevents me from carrying heavy object but I can manage medium weight objects."
              }
            },
            {
              "value": "3",
              "text": {
                "zh-tw": "我只可以拿起輕的物件(2公斤以下)",
                "default": "I can only lift light weight objects."
              }
            },
            {
              "value": "4",
              "text": {
                "zh-tw": "我甚麼東西都拿不起來",
                "default": "I cannot lift anything at all."
              }
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q6",
          "title": {
            "zh-tw": "6. 閱讀及看電視",
            "default": "6. Reading and Watching TV"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": {
                "zh-tw": "多久都可以，沒有任何困難",
                "default": "I can do this as long as I wish with no problems."
              }
            },
            {
              "value": "1",
              "text": {
                "zh-tw": "如果我的姿勢適當，多久都可以",
                "default": "I can do this as long as I wish if I'm in a suitable position."
              }
            },
            {
              "value": "2",
              "text": {
                "zh-tw": "多久都可以，但會產生額外的痛楚",
                "default": "I can do this as long as I wish but it causes extra pain."
              }
            },
            {
              "value": "3",
              "text": {
                "zh-tw": "痛楚使我不願意地提早結束這些活動",
                "default": "Pain causes me to stop doing this sooner than I would like."
              }
            },
            {
              "value": "4",
              "text": {
                "zh-tw": "痛楚使我根本無法閱讀及看電視",
                "default": "Pain prevents me from doing this at all."
              }
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q7",
          "title": {
            "zh-tw": "7. 工作、家務之類",
            "default": "7. Work / Housework"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": {
                "zh-tw": "我可做平時的工作而不感到額外的痛楚",
                "default": "I can do my usual work without extra pain."
              }
            },
            {
              "value": "1",
              "text": {
                "zh-tw": "我可做平時的工作，但這使我感到額外的痛楚",
                "default": "I can do my usual work but it gives me extra pain."
              }
            },
            {
              "value": "2",
              "text": {
                "zh-tw": "痛楚使我只能做平時工作量的一半或以下",
                "default": "Pain prevents me from doing my usual work for more than half the usual time."
              }
            },
            {
              "value": "3",
              "text": {
                "zh-tw": "痛楚使我只能做平時工作量的四分之一或以下",
                "default": "Pain prevents me from doing my usual work for more than a quarter of the usual time."
              }
            },
            {
              "value": "4",
              "text": {
                "zh-tw": "痛楚使我根本無法工作",
                "default": "Pain prevents me from working at all."
              }
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q8",
          "title": {
            "zh-tw": "8. 社交活動",
            "default": "8. Social Activities"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": {
                "zh-tw": "我的社交生活正常，並不導致額外的痛楚",
                "default": "My social life is normal and causes me no extra pain."
              }
            },
            {
              "value": "1",
              "text": {
                "zh-tw": "我的社交生活正常，但會增加痛的程度",
                "default": "My social life is normal but increases the degree of pain."
              }
            },
            {
              "value": "2",
              "text": {
                "zh-tw": "頸痛規限了我的社交生活，但我仍可外出活動",
                "default": "Pain has restricted my social life but I am still able to go out."
              }
            },
            {
              "value": "3",
              "text": {
                "zh-tw": "頸痛使我的社交生活只能限於居所之內",
                "default": "Pain has restricted my social life to the home."
              }
            },
            {
              "value": "4",
              "text": {
                "zh-tw": "頸痛使我沒有社交生活",
                "default": "I have no social life because of pain."
              }
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q9",
          "title": {
            "zh-tw": "9. 駕駛\n(如果你連健康時也不駕駛的話，不必回答本題)",
            "default": "Driving\n(The question on driving can be omitted if you did not drive a car when in good health)"
          },
          "choices": [
            {
              "value": "0",
              "text": {
                "zh-tw": "我有需要便可以駕駛，不會感到不適",
                "default": "I can drive whenever necessary without discomfort."
              }
            },
            {
              "value": "1",
              "text": {
                "zh-tw": "我有需要便可以駕駛，但會感到不適",
                "default": "I can drive whenever necessary but with discomfort."
              }
            },
            {
              "value": "2",
              "text": {
                "zh-tw": "頸部的痛楚或僵直情況有時會限制我駕駛",
                "default": "Neck pain or stiffness limits my driving occasionally."
              }
            },
            {
              "value": "3",
              "text": {
                "zh-tw": "頸部的痛楚或僵直情況經常限制我駕駛",
                "default": "Neck pain or stiffness limits my driving frequently."
              }
            },
            {
              "value": "4",
              "text": {
                "zh-tw": "頸痛症狀使我根本無法駕駛",
                "default": "I cannot drive at all due to neck symptoms."
              }
            }
          ]
        }
      ]
    }
  ],
  "showCompletePage": false,
  "headerView": "advanced"
};

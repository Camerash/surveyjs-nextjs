'use client'

import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/survey-core.css'
import { json } from '../../data/survey_json.js'
import { useCallback, useState } from 'react'
  
export default function SurveyComponent() {
  const [score, setScore] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>('zh-tw');
  const [model, setModel] = useState(() => {
    const surveyModel = new Model(json);
    surveyModel.locale = 'zh-tw';
    return surveyModel;
  });
  
  const surveyComplete = useCallback((survey: Model) => {
    // sum all value in survey.data
    const calculatedScore = Object.values(survey.data).reduce((sum: number, value) => sum + parseInt(value as string, 10), 0);
    setScore(calculatedScore);
    setIsComplete(true);
  }, []);

  const resetSurvey = useCallback(() => {
    setScore(null);
    setIsComplete(false);
    const newModel = new Model(json);
    newModel.locale = currentLanguage;
    newModel.onComplete.add(surveyComplete);
    setModel(newModel);
  }, [surveyComplete, currentLanguage]);

  const toggleLanguage = useCallback(() => {
    const newLanguage = currentLanguage === 'zh-tw' ? 'en' : 'zh-tw';
    setCurrentLanguage(newLanguage);
    const newModel = new Model({ ...json, locale: newLanguage });
    newModel.onComplete.add(surveyComplete);
    setModel(newModel);
  }, [currentLanguage, surveyComplete]);

  model.onComplete.add(surveyComplete);

  const scoreDisplay = `${score}/36 = ${Math.round((score!/36)*100)}/100`;
  
  return (
    <div className="w-full">
      {/* Control Buttons */}
      <div className="absolute top-4 right-4 z-40 flex gap-2">
        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-sm"
        >
          {currentLanguage === 'zh-tw' ? 'English' : '繁體中文'}
        </button>
      </div>
      
      <Survey model={model}/>
      
      {isComplete && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center w-screen h-screen">
          <div className="text-center p-8 max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {currentLanguage === 'zh-tw' ? 
              "非常感謝您完成了這份調查中所有的問題" : 
              "Thank you very much for completing all the questions in this survey."}
            </h2>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {currentLanguage === 'zh-tw' ? 
                "請勿關閉此頁面，並將你的分數寫在卡上，然後交給物理治療師。" : 
                "Please do not close this page, and write your score on the card, then hand it to the physiotherapist."}
              </h2>
            </div>
            <div className="mb-8">
              <div className="text-3xl font-bold text-blue-600 mb-4">
                {currentLanguage === 'zh-tw' ? 
                `你的分數是:`:
                `Your score is:`}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                {scoreDisplay}
              </div>
            </div>
            <button
              onClick={resetSurvey}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
            >
              {currentLanguage === 'zh-tw' ? 
                "重新填寫":
                "Take Survey Again"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

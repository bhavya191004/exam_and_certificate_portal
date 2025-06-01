import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../utils/api';
import { Award, Clock, CheckCircle, XCircle, ArrowLeft, BarChart2 } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import jsPDF from 'jspdf';
import { useAuth } from '../context/AuthContext';

const ExamResults = () => {
  const { id } = useParams();
  const [attempt, setAttempt] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchAttemptDetails = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/api/attempts/${id}`);
        setAttempt(res.data);
      } catch (error) {
        console.error('Error fetching attempt details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchAttemptDetails();
    }
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!attempt) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Attempt Not Found</h2>
        <p className="text-gray-600 mb-6">The exam attempt you're looking for doesn't exist or has been removed.</p>
        <Link to="/history" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Back to History
        </Link>
      </div>
    );
  }

  // Calculate stats
  const totalQuestions = attempt.answers.length;
  const correctAnswers = attempt.answers.filter(
    a => a.selectedOption !== undefined && a.question.options[a.selectedOption]?.isCorrect
  ).length;
  const incorrectAnswers = attempt.answers.filter(
    a => a.selectedOption !== undefined && !a.question.options[a.selectedOption]?.isCorrect
  ).length;
  const unansweredQuestions = attempt.answers.filter(a => a.selectedOption === undefined).length;

  const generateCertificate = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const title = attempt.exam.title;
    const score = attempt.score;
    const date = new Date(attempt.endTime || Date.now()).toLocaleDateString();
    const userName = user?.name || 'Candidate';

    // Draw border
    doc.setLineWidth(4);
    doc.setDrawColor(0, 0, 0); // Border color
    doc.rect(20, 20, pageWidth - 40, pageHeight - 40, 'S');

    // Header
    doc.setFontSize(54);
    doc.setFont('times', 'bold');
    doc.setTextColor(44, 62, 80);
    doc.text('Certificate of Achievement', pageWidth / 2, 120, { align: 'center' });

    // Certify text
    doc.setFontSize(23);
    doc.setFont('times', 'normal');
    doc.setTextColor(0,0,0);
    doc.text('This is to certify that', pageWidth / 2, 170, { align: 'center' });

    // Name
    doc.setFontSize(32);
    doc.setFont('times', 'bolditalic');
    doc.setTextColor(26, 188, 156);
    doc.text(userName, pageWidth / 2, 220, { align: 'center' });

    // Result statement
    doc.setFontSize(23);
    doc.setFont('times', 'normal');
    doc.setTextColor(0, 0, 0);
    const resultText = score >= attempt.exam.passingScore ? 'has successfully passed the' : 'has failed the';
    doc.text(resultText, pageWidth / 2, 260, { align: 'center' });

    // Exam title
    doc.setFontSize(32);
    doc.setFont('times', 'bold');
    doc.setTextColor(52, 73, 94);
    doc.text(title, pageWidth / 2, 300, { align: 'center' });

    // Score
    doc.setFontSize(23);
    doc.setFont('times', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(`with a score of ${score.toFixed(2)}%`, pageWidth / 2, 340, { align: 'center' });

    // Date bottom left
    doc.setFontSize(20);
    doc.setTextColor(100);
    doc.text(`Date: ${date}`, 40, pageHeight - 60);

    // Footer bottom right
    doc.setFontSize(20);
    doc.setFont('times', 'italic');
    doc.text(`Authorized by Online Exam Platform`, pageWidth - 330, pageHeight - 60);

    // Save
    doc.save(`Certificate-${title}.pdf`);
  };

  return (
    <div className="space-y-8">
      {/* Result Header */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{attempt.exam.title}</h1>
              <p className="text-gray-600 mt-1">
                Taken on {new Date(attempt.startTime).toLocaleDateString()} at {new Date(attempt.startTime).toLocaleTimeString()}
              </p>
            </div>
            
            <Link
              to={`/exams/${attempt.exam._id}`}
              className="mt-4 md:mt-0 flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Exam
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className={`p-6 rounded-lg flex items-center ${attempt.score >= attempt.exam.passingScore ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className={`rounded-full p-3 mr-4 ${attempt.score >= attempt.exam.passingScore ? 'bg-green-100' : 'bg-red-100'}`}>
                {attempt.score >= attempt.exam.passingScore ? (
                  <Award className="h-8 w-8 text-green-600" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-600" />
                )}
              </div>
              <div>
                <p className="text-sm text-gray-600">Result</p>
                <p className={`text-2xl font-bold ${attempt.score >= attempt.exam.passingScore ? 'text-green-600' : 'text-red-600'}`}>
                  {attempt.score >= attempt.exam.passingScore ? 'PASSED' : 'FAILED'}
                </p>
                <p className="text-sm text-gray-600">
                  Score: {attempt.score}% (Required: {attempt.exam.passingScore}%)
                </p>

                {attempt.score >= attempt.exam.passingScore && (
                  <div className="mt-6">
                    <button
                      onClick={generateCertificate}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                    >
                      <Award className="w-5 h-5 mr-2" />
                      Download Certificate
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Time Taken</p>
                <p className="text-2xl font-bold text-blue-600">
                  {attempt.endTime ? (
                    `${Math.round((new Date(attempt.endTime).getTime() - new Date(attempt.startTime).getTime()) / 60000)} minutes`
                  ) : (
                    'In Progress'
                  )}
                </p>
              </div>
            </div>
          </div>
          
          {/* Performance Summary */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-lg font-semibold mb-4">Performance Summary</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="rounded-full bg-green-100 p-2 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Correct</p>
                    <p className="text-lg font-semibold">{correctAnswers} / {totalQuestions}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="rounded-full bg-red-100 p-2 mr-3">
                    <XCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Incorrect</p>
                    <p className="text-lg font-semibold">{incorrectAnswers} / {totalQuestions}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-100 p-2 mr-3">
                    <BarChart2 className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Unanswered</p>
                    <p className="text-lg font-semibold">{unansweredQuestions} / {totalQuestions}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="flex h-4 rounded-full overflow-hidden">
                <div 
                  className="bg-green-500 h-4" 
                  style={{ width: `${(correctAnswers / totalQuestions) * 100}%` }}
                ></div>
                <div 
                  className="bg-red-500 h-4" 
                  style={{ width: `${(incorrectAnswers / totalQuestions) * 100}%` }}
                ></div>
                <div 
                  className="bg-gray-400 h-4" 
                  style={{ width: `${(unansweredQuestions / totalQuestions) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Detailed Results</h2>
          
          <div className="space-y-6">
            {attempt.answers.map((answer, index) => {
              const isCorrect = answer.selectedOption !== undefined && 
                answer.question.options[answer.selectedOption]?.isCorrect;
              const isUnanswered = answer.selectedOption === undefined;
              
              return (
                <div 
                  key={answer.question._id} 
                  className={`p-6 rounded-lg border ${
                    isUnanswered 
                      ? 'border-gray-300 bg-gray-50' 
                      : isCorrect 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-red-300 bg-red-50'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-3 flex-shrink-0 ${
                      isUnanswered 
                        ? 'bg-gray-200' 
                        : isCorrect 
                          ? 'bg-green-200' 
                          : 'bg-red-200'
                    }`}>
                      {isUnanswered ? (
                        <BarChart2 className="h-5 w-5 text-gray-600" />
                      ) : isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-medium mb-3">
                        {index + 1}. {answer.question.text}
                      </h3>
                      
                      <div className="space-y-2">
                        {answer.question.options.map((option, optIndex) => (
                          <div 
                            key={option._id}
                            className={`p-3 rounded-md ${
                              answer.selectedOption === optIndex && option.isCorrect
                                ? 'bg-green-200 border border-green-300'
                                : answer.selectedOption === optIndex && !option.isCorrect
                                  ? 'bg-red-200 border border-red-300'
                                  : option.isCorrect
                                    ? 'bg-green-100 border border-green-200'
                                    : 'bg-white border border-gray-200'
                            }`}
                          >
                            <div className="flex items-center">
                              <div className={`h-6 w-6 flex items-center justify-center rounded-full mr-3 ${
                                answer.selectedOption === optIndex
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-200 text-gray-700'
                              }`}>
                                {String.fromCharCode(65 + optIndex)}
                              </div>
                              <span>{option.text}</span>
                              {option.isCorrect && (
                                <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {!isUnanswered && !isCorrect && (
                        <div className="mt-4 text-sm text-red-600">
                          <p>
                            Your answer: {String.fromCharCode(65 + (answer.selectedOption || 0))}
                          </p>
                          <p>
                            Correct answer: {String.fromCharCode(65 + answer.question.options.findIndex(o => o.isCorrect))}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamResults;
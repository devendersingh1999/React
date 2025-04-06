import React, { useState } from 'react';

const Translator = () => {
  const [srcLanguage, setSrcLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translator = async (event) => {
    event.preventDefault();

    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'ea86ec0756msh17e532df1e1c9c9p170c20jsnebad0933d91c',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        src_language: srcLanguage,
        target_language: targetLanguage,
        text: text,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setTranslatedText(result.data.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container m-5 rounded border border-secondary shadow p-4 mx-auto">
      <form onSubmit={translator}>
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6">
            
            <div className="mb-3">
              <label className="form-label">Source Language</label>

              <select  className="form-select" value={srcLanguage}  onChange={(e) => setSrcLanguage(e.target.value)} >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fe">French</option>
                <option value="te">Telugu</option>
                <option value="hi">Hindi</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Enter Text</label>
              <textarea
                className="form-control"
                rows="5"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Target Language</label>
              <select
                className="form-select"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fe">French</option>
                <option value="te">Telugu</option>
                <option value="hi">Hindi</option>
              </select>
            </div>

            <div className="mb-3">
              <h3>Translated Text</h3>
              <p className="p-3 bg-light rounded" style={{ minHeight: '100px' }}>  {translatedText} </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Translator;


// improve version
// import React, { useState } from 'react';

// const Translator = () => {
//   const [srcLanguage, setSrcLanguage] = useState('en');
//   const [targetLanguage, setTargetLanguage] = useState('es');
//   const [text, setText] = useState('');
//   const [translatedText, setTranslatedText] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const translator = async (event) => {
//     event.preventDefault();

//     if (!text.trim()) {
//       setError('Please enter text to translate.');
//       return;
//     }

//     setError('');
//     setLoading(true);

//     const url = 'https://text-translator2.p.rapidapi.com/translate';
//     const options = {
//       method: 'POST',
//       headers: {
//         'x-rapidapi-key': 'ea86ec0756msh17e532df1e1c9c9p170c20jsnebad0933d91c',
//         'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({
//         src_language: srcLanguage,
//         target_language: targetLanguage,
//         text: text,
//       }),
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       console.log(result);
//       setTranslatedText(result.data.translatedText);
//     } catch (error) {
//       console.error(error);
//       setError('An error occurred. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container m-5 rounded border border-secondary shadow p-4 mx-auto">
//       <form onSubmit={translator}>
//         <div className="mb-3">
//           <label className="form-label">Enter Text</label>
//           <input
//             type="text"
//             className="form-control"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Type text to translate..."
//           />
//         </div>

//         <div className="d-flex justify-content-between">
//           <div className="mb-3">
//             <label className="form-label">Source Language</label>
//             <select
//               className="form-select"
//               value={srcLanguage}
//               onChange={(e) => setSrcLanguage(e.target.value)}
//             >
//               <option value="en">English</option>
//               <option value="es">Spanish</option>
//               <option value="fr">French</option>
//               <option value="te">Telugu</option>
//               <option value="hi">Hindi</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Target Language</label>
//             <select
//               className="form-select"
//               value={targetLanguage}
//               onChange={(e) => setTargetLanguage(e.target.value)}
//             >
//               <option value="en">English</option>
//               <option value="es">Spanish</option>
//               <option value="fr">French</option>
//               <option value="te">Telugu</option>
//               <option value="hi">Hindi</option>
//             </select>
//           </div>
//         </div>

//         {error && <p className="text-danger">{error}</p>}

//         <div className="mb-3">
//           <h3>Translated Text</h3>
//           <p className="p-3 bg-light rounded py-4">{translatedText || (loading ? 'Translating...' : 'Translation will appear here.')}</p>
//         </div>

//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? (
//             <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//           ) : (
//             'Submit'
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Translator;


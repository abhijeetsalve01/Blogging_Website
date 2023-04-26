import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, WordExport, SfdtExport, Selection, Editor } from '@syncfusion/ej2';
//Inject require module.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, WordExport);
function App() {
    
    return (<div>
                <button onClick={save}>Save</button>
                <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableWordExport={true}/>
            </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
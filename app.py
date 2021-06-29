from flask import Flask, render_template, request
import pandas as pd
import numpy as np
import joblib
from flask_cors import CORS, cross_origin #comment this on deployment


app = Flask(__name__, static_folder='hrfrontend/build', static_url_path='/')
#CORS(app, support_credentials=True)
#app.config['CORS_HEADERS'] = 'Content-Type'
##@app.route('/')
##def index():
##    return render_template('index.html')

@app.route('/', methods=['GET'])
def hello():
    return jsonify({"response":"This is Sentiment Application"})

@app.route('/hrformsubmit/', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def hrFormPredict():
    content = request.json
    sessionData = content
    session_df = pd.DataFrame(sessionData, index=[0])
    session_df['avgMthHours'] = session_df['avgMthHours'].apply(pd.to_numeric)
    session_df['workAccident'] = session_df['workAccident'].astype(np.int64)
    session_df['promo5years'] = session_df['promo5years'].astype(np.int64)
    try:
        result = "The employee will " + modelling(session_df) + "."
        return(result)
    except ValueError:
          return ValueError

# @app.route('/predict/', methods=['GET','POST'])
# def predict():
#     if request.method == "POST":
#         satisfaction_level = request.form.get('sLevel')
#         last_evaluation = request.form.get('lastEval')
#         number_project = request.form.get('noProj')
#         average_montly_hours = request.form.get('avgMthHours')
#         time_spend_company = request.form.get('totalTimeSpent')
#         Work_accident = request.form.get('workAccident')
#         promotion_last_5years = request.form.get('promo5years')
#         Department = request.form.get('Department')
#         Salary = request.form.get('Salary')
#         sessionData = { 'Work_accident' : Work_accident, 'average_montly_hours' : average_montly_hours, 'last_evaluation' : last_evaluation, 
#         'promotion_last_5years': promotion_last_5years, 'satisfaction_level' : satisfaction_level, 'target_Department' : Department, 
#         'target_number_project' : number_project, 'target_salary': Salary, 'target_time_spend_company' : time_spend_company
#         }
#        ## sessionData = {'satisfaction_level' : satisfaction_level, 'last_evaluation' : last_evaluation, 'target_number_project' : number_project,
#        ##'average_montly_hours' : average_montly_hours, 'target_time_spend_company' : time_spend_company, 'Work_accident' : Work_accident, 
#        ##'promotion_last_5years': promotion_last_5years, 'target_Department' : Department, 'target_salary': Salary}
#         ##session_df = pd.DataFrame(sessionData, columns=['satisfaction_level', 'last_evaluation', 'number_project',
#        ##'average_montly_hours', 'time_spend_company', 'Work_accident', 'left',
#        ##'promotion_last_5years', 'Department', 'salary'])
#         session_df = pd.DataFrame(sessionData, index=[0])
#         try:
#             print('test')
#             result = modelling(session_df)
#             print(result)
#             return render_template('predict.html', prediction = result)
#         except ValueError:
#           return ValueError
#         pass
#     pass

def preprocessingData(session_df):
        departmentMap = {'sales': 0.16980549552330967,'accounting': 0.17552334943639292, 'hr': 0.18801996672212978, 'technical': 0.17379679144385027, 'support': 0.171334431630972, 
        'management': 0.11926605504587157, 'IT': 0.16188524590163936,'product_mng': 0.16034985422740525,'marketing': 0.1664190193164933, 'RandD': 0.12247838616714697}       
        noProjectMap = { 2: 0.5417193426042983, 5: 0.1536050156739812, 7: 1.0, 6: 0.4491525423728814, 4: 0.06431478968792402, 3: 0.010795454545454546}
        salaryMap = {'low': 0.20452961672473868, 'medium': 0.14616992967116518, 'high': 0.048484848484848485}
        timeSpentMap = {3: 0.16840077071290943, 6: 0.13228155339805825, 4: 0.24688279301745636, 5: 0.4538606403013183, 2: 0.010652920962199313}
        session_df = session_df.replace({'target_number_project': noProjectMap, 'target_Department': departmentMap, 'target_salary': salaryMap, 'target_time_spend_company': timeSpentMap})
        return(session_df)

def modelling(session_df):
    departmentMap = {'sales': 0.16980549552330967,'accounting': 0.17552334943639292, 'hr': 0.18801996672212978, 'technical': 0.17379679144385027, 'support': 0.171334431630972, 
    'management': 0.11926605504587157, 'IT': 0.16188524590163936,'product_mng': 0.16034985422740525,'marketing': 0.1664190193164933, 'RandD': 0.12247838616714697}       
    noProjectMap = { 2: 0.5417193426042983, 5: 0.1536050156739812, 7: 1.0, 6: 0.4491525423728814, 4: 0.06431478968792402, 3: 0.010795454545454546}
    salaryMap = {'low': 0.20452961672473868, 'medium': 0.14616992967116518, 'high': 0.048484848484848485}
    timeSpentMap = {3: 0.16840077071290943, 6: 0.13228155339805825, 4: 0.24688279301745636, 5: 0.4538606403013183, 2: 0.010652920962199313}
    session_df = session_df.replace({'target_number_project': noProjectMap, 'target_Department': departmentMap, 'target_salary': salaryMap, 'target_time_spend_company': timeSpentMap})
    file = open("hrXgBoostModel.pkl", "rb")
    trained_model = joblib.load(file)
    prediction = trained_model.predict(session_df)
    if prediction[0] == 0:
        print('here')
        result = 'stay'
    else:
        result = 'leave'
    return result

if __name__ == '__main__':
    app.run(port=3000, debug=True)

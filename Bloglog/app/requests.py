from app import app
import urllib.request,json
from .models import Quote

Quote = quote.Quote

base_url = app.config["QUOTE_API_BASE_URL"]

def get_quotes():
    '''
    Function that gets the json response to our url request
    '''
    with urllib.request.urlopen(base_url) as url:
        get_quotes_data = url.read()
        get_quotes_resp = json.loads(get_quotes_data)

        quote_results = None

        if get_quotes_resp['']:
            quote_results_list = get_quotes_resp[('')]
            quote_results = process_results(quote_results_list)

    return quote_results



def 


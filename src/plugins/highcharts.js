import Highcharts from 'highcharts'
import StockFactory from 'highcharts/modules/stock'
import IndicatorsFactory from 'highcharts/indicators/indicators-all'
import AccessibilityFactory from 'highcharts/modules/accessibility'
import DataFactory from 'highcharts/modules/data'
import SankeyFactory from 'highcharts/modules/sankey'

Highcharts.theme = {
  colors: [ '#1E7DE8', '#165BAA', '#068597', '#15B3C9', '#F2F2F2' ],
  chart: {
    backgroundColor: 'transparent',
    style: {
      fontFamily: "'Noto Sans Thai'"
    },
    zooming: {
      mouseWheel: {
        enabled: false
      }
    }
  },
  title: {
    style: {
      display: 'none'
    }
  },
  subtitle: {
    style: {
      display: 'none'
    }
  },
  legend: {
    style: {
      display: 'none'
    }
  },
  credits: {
    enabled: false
  },
  time: {
    useUTC: false
  },
  lang: {
    decimalPoint: '.',
    thousandsSep: ',',
    numericSymbols: [' M'],
    numericSymbolMagnitude: 1000000
  }
}
Highcharts.setOptions(Highcharts.theme)
StockFactory(Highcharts)
AccessibilityFactory(Highcharts)
IndicatorsFactory(Highcharts)
DataFactory(Highcharts)
SankeyFactory(Highcharts)

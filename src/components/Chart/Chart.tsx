'use client'

// This is a client side React component.
// We use Liquid Oxygen Web Components with React bindings here.
// See https://liquid.merck.design/liquid/guides/server-side-rendering/#react-server-components

import { LdTypo } from '@emdgroup-liquid/liquid/dist/react-define-excluded'
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core'
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core'
// Import charts, with Chart suffix.
import { LineChart } from 'echarts/charts'
// import components, all suffixed with Component.
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
} from 'echarts/components'
// Import renderer. Note that introducing the CanvasRenderer or SVGRenderer is a required step.
import { CanvasRenderer } from 'echarts/renderers'

const options = {
  grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

const Chart: React.FC = () => {
  // Register theme object.
  echarts.registerTheme('liquid', {
    backgroundColor: '#f4cccc',
  })

  // Register the required components.
  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LineChart,
    CanvasRenderer,
  ])

  return (
    <section className="bg-wht rounded-l shadow-hover p-ld-32 mb-ld-16">
      <LdTypo variant="h2" className="mb-ld-12">
        A Chart
      </LdTypo>

      <ReactEChartsCore
        echarts={echarts}
        option={options}
        notMerge={true}
        lazyUpdate={true}
        theme={'liquid'}
      />
    </section>
  )
}

export default Chart

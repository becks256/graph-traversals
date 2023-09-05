const corporateHierarchy = {
  CEO: ["CTO", "CFO", "CMO"],
  CTO: ["Dev1", "Dev2"],
  CFO: ["Acc1"],
  CMO: ["Mkt1"],
  Dev1: [],
  Dev2: [],
  Acc1: [],
  Mkt1: [],
}

export const findAllReportees = (
  graph: {
    [x: string]: string[]
  },
  start: string
): string[] => {
  // let visited: {[x: string]: boolean}[] = []
  let directReports = graph[start]
  return [
    ...directReports,
    ...directReports.flatMap((reportee: string) =>
      findAllReportees(graph, reportee)
    ),
  ]
}

export default () =>
  console.log("All reports for CEO:", [...new Set(findAllReportees(corporateHierarchy, "CEO"))])

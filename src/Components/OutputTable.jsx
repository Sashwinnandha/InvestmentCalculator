import { formatter } from "../util/investment.js";

export default function OutputTable({dataArr,initialAmount}){
   let totalInterest=0;
   let investedCaptial=parseInt(initialAmount);
   let investedValue=0;
    return(
        <table id="result">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest (Year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>
                {dataArr.map((each)=>{
                    totalInterest=totalInterest+each.interest;
                    investedCaptial+=each.annualInvestment;
                    investedValue=investedCaptial+totalInterest
                    return(
                        <tr key={each.year}>
                            <td>{each.year}</td>
                            <td>{formatter.format(investedValue)}</td>
                            <td>{formatter.format(each.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCaptial)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
let payroll = [
    { name: "ravi", basePay: 30000, bonus: 2000, taxRate: 0.1 },
    { name: "nanda", basePay: 25000, bonus: 1500, taxRate: 0.08 },
    { name: "sneha", basePay: -20000, bonus: 1000, taxRate: 0.1 },
    { name: "Kiran", basePay: 28000, bonus: 0, taxRate: 0.12 },
    { name: "siri", basePay: 32000, bonus: 3000, taxRate: 1.5 }
];

let validRecords = payroll.filter(function(emp) {
    return emp.basePay > 0 && emp.bonus >= 0 && emp.taxRate >= 0 && emp.taxRate <= 1;
});

let netPayReport = validRecords.map(function(emp) {

    let gross = emp.basePay + emp.bonus;
    let netPay = gross - (gross * emp.taxRate);

    return {
        name: emp.name,
        netPay: netPay
    };
});

let totalNetPayout = netPayReport.reduce(function(total, emp) {
    return total + emp.netPay;
}, 0);

console.log("Valid Records:", validRecords);
console.log("Net Pay Report:", netPayReport);
console.log("Total Net Payout:", totalNetPayout);
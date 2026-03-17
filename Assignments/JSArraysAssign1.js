let tickets = [
    { id: "T1", priority: "HIGH", resolved: false },
    { id: "T2", priority: "MEDIUM", resolved: true },
    { id: "T3", priority: "LOW", resolved: false },
    { id: "T4", priority: "HIGH", resolved: false },
    { id: "T5", priority: "MEDIUM", resolved: true }
];

tickets.unshift({ id: "T10", priority: "HIGH", resolved: false });

tickets.push(
    { id: "T6", priority: "LOW", resolved: false },
    { id: "T7", priority: "MEDIUM", resolved: false }
);

let currentTicket = tickets.shift();

let droppedTicket = tickets.pop();

let pending = tickets.filter(function(ticket) {
    return ticket.resolved === false;
});

let pendingIds = pending.map(function(ticket) {
    return ticket.id;
});

console.log("Current Ticket:", currentTicket);
console.log("Dropped Ticket:", droppedTicket);
console.log("Pending Tickets:", pending);
console.log("Pending IDs:", pendingIds);
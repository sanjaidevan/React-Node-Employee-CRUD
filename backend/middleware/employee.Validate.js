export const validateEmployee = (req,res,next) => {
    const { firstname, lastname, dob, emailid, mobile, role } = req.body;
    const nameRegex = /^[A-Za-z]{3,30}$/;
    if (!nameRegex.test(firstname)) { return res.status(400).json({ error: `First Name Error : ${firstname}` }); };
    if (!nameRegex.test(lastname)) { return res.status(400).json({ error: `Last Name Error : ${lastname}` }); };
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) { return res.status(400).json({ error: `Invalid DOB : ${dob}` }); };
    if (! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailid)) { return res.status(400).json({ error: `Invalid Email : ${emailid}` }); };
    if (!/^\d{10}$/.test(mobile)) { return res.status(400).json({ error: `Invalid Mobile Number : ${mobile}` }); };
    if (!/^[A-Za-z0-9]{3,20}$/.test(role)) { return res.status(400).json({ error: `Invalid Role: ${role}` }); };

    next();
};
## Introduction
This is a website whose goal is to protect domestic violence victims from any threats as they reach out. The idea is to have a website that poses as an ordinary news website (which displays up to date news with links to actual articles), but is secretly a portal for victims to reach out to law enforcement, therapists, or whoever they may need to be on the other side without being spotted.

This website was built from a React frontend and an Express backend using node for the web server. The communication between the victim and the first responder is sent via a mongoose API on a MongoDB database. It uses the SendGrid API to have the initial communication for the initial message to the first responder, and a different webapp for them to respond on.

You can find a video demo of this at https://devpost.com/software/secret-online-refuge.

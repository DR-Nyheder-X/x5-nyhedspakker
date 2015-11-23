//
//  ViewController.swift
//  Nyhedspakker
//
//  Created by Mikkel Malmberg on 23/11/15.
//  Copyright © 2015 DR Nyheder. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController, UIWebViewDelegate {
    
    @IBOutlet var webView: UIWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let url = NSURL(string: "http://localhost:8000")!
        let req = NSURLRequest(URL: url)
        webView.loadRequest(req)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }


}


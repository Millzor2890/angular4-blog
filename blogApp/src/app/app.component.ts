import { Component } from '@angular/core';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { NgModule } from '@angular/core/src/metadata/ng_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  declarations:[BlogPostComponent]
})

export class AppComponent {
  title = 'App works! I did it2';
}

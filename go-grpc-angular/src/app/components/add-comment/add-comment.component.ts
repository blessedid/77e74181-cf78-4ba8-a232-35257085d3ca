import { Component, OnInit } from '@angular/core';
import { TaskCommentAddService } from '../../services/task-comment-add.service';
import {ActivatedRoute} from '@angular/router';
import {EditorComponent, EditorModule} from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.sass']
})
export class AddCommentComponent implements OnInit {

  init = {
    menubar: false,
    base_url: '/assets/tinymce',
    language: 'ru',
    suffix: '.min',
    paste_data_images: true,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code image wordcount'
    ],
    toolbar: 'undo redo | formatselect |  bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter  alignright alignjustify | bullist numlist outdent indent', // image
    // images_upload_url: 'iii.php',
    images_upload_handler(blobInfo, success, failure) {

      console.log(
        blobInfo.blob(),
        blobInfo.base64(),
        blobInfo.blobUri(),
        blobInfo.uri());
      setTimeout(() => {
        success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
      }, 2000);
    }
  };
  comment: string;
  isLoadingButton = false;

  constructor(private taskCommentAddService: TaskCommentAddService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  sendComment($event: MouseEvent) {
    this.isLoadingButton = true;
    const idTask = this.route.snapshot.paramMap.get('id');

    this.taskCommentAddService.add(Number(idTask), this.comment);

    setTimeout(() => {
      this.comment = '';
      this.isLoadingButton = false;
    }, 2000);
  }

}

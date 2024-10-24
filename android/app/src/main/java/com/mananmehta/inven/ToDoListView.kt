package com.schmoozeapps.schmooze

import android.content.Context
import android.util.Log
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.amplifyframework.auth.cognito.AWSCognitoAuthPlugin
import com.amplifyframework.core.Amplify

class ToDoListView(context: Context) : LinearLayout(context) {

    private val tasks: MutableList<String> = mutableListOf()

    init {
        orientation = VERTICAL
        // Add these lines to include the Auth plugin.
        Amplify.addPlugin(AWSCognitoAuthPlugin())
        Amplify.configure(context)

        // Example Task
        addTask("Sample Task")
    }

    private fun addTask(task: String) {
        val taskView =
                TextView(context).apply {
                    text = task
                    textSize = 18f
                    setOnClickListener {
                        Log.d("ToDoListView", "Task: $task click")
                        Toast.makeText(context, "Task: $task clicked", Toast.LENGTH_SHORT).show()
                    }
                }
        addView(taskView)
    }

    fun addNewTask(task: String) {
        tasks.add(task)
        addTask(task)
    }
}

class ToDoListViewManager : SimpleViewManager<ToDoListView>() {

    override fun getName() = "ToDoListView"

    override fun createViewInstance(reactContext: ThemedReactContext): ToDoListView {
        return ToDoListView(reactContext)
    }

    @ReactProp(name = "newTask")
    fun setNewTask(view: ToDoListView, task: String) {
        view.addNewTask(task)
    }

    // @ReactProp(name = "sessionId")
    // fun setSessionId()
}
